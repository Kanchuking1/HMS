package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type summarizeRequest struct {
	Documents []string `json:"documents"`
}

type summarizeResponse struct {
	CheatSheet string `json:"cheat_sheet"`
}

func main() {
	router := gin.Default()

	router.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"status": "ok"})
	})

	router.POST("/summarize", func(c *gin.Context) {
		var req summarizeRequest
		if err := c.ShouldBindJSON(&req); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "invalid request"})
			return
		}

		// Placeholder response for pipeline integration.
		c.JSON(http.StatusOK, summarizeResponse{
			CheatSheet: "Summarization pipeline not connected yet.",
		})
	})

	_ = router.Run(":8080")
}
