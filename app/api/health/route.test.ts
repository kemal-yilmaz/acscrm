import { describe, expect, it } from 'vitest';

describe('Health route', () => {
  it('exports GET handler and returns 200', async () => {
    const mod = await import('./route');
    expect(typeof mod.GET).toBe('function');
    const res: Response = await mod.GET();
    expect(res.status).toBe(200);
  });
});
