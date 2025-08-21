from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    try:
        # Verify login page
        page.goto("http://localhost:5173/login", wait_until="networkidle")
        expect(page.get_by_role("heading", name="Welcome Back!")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/login_page_v3.png")

        # Go to signup page
        page.get_by_role("link", name="Sign Up").click()
        page.wait_for_url("http://localhost:5173/signup")
        expect(page.get_by_role("heading", name="Create your Account")).to_be_visible()

        # Fill and submit signup form
        page.get_by_label("Organization Name").fill("Test Org")
        page.get_by_label("Email Address").fill("test@example.com")
        page.get_by_label("Password").fill("password123")
        page.get_by_role("button", name="Create Account").click()

        # Verify OTP modal
        expect(page.get_by_role("heading", name="Enter Verification Code")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/signup_otp_modal_v2.png")

    finally:
        context.close()
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
