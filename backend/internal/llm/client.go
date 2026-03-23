package llm

import "context"

type Client interface {
	SummarizeChunk(ctx context.Context, chunk string) (string, error)
}
