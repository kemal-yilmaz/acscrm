import { describe, expect, it, vi } from 'vitest';

vi.mock('next/navigation', () => ({
  redirect: vi.fn(),
}));

describe('HomePage redirect', () => {
  it('calls redirect to /layout-1', async () => {
    const { default: HomePage } = await import('./page');
    const { redirect } = await import('next/navigation');
    // Render (invoke) the server component function
    HomePage();
    expect(
      (redirect as unknown as { mock: { calls: any[][] } }).mock.calls[0][0],
    ).toBe('/layout-1');
  });
});
