from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    try:
        # Verify dashboard page
        page.goto("http://localhost:5173/dashboard", wait_until="networkidle")

        # Verify that the main components are visible
        expect(page.get_by_role("heading", name="Dashboard")).to_be_visible()
        expect(page.get_by_text("Wallet Balance")).to_be_visible()
        expect(page.get_by_text("Vend History")).to_be_visible()
        expect(page.get_by_text("Recent Vends")).to_be_visible()

        page.screenshot(path="jules-scratch/verification/dashboard_page_v3.png")

    finally:
        context.close()
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
