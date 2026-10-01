# User Stories

## 1. User Registration
**As a** new visitor,  
**I need** to register an account with my email and password,  
**So that** I can access the platform and list items.

### Details and Assumptions
- Users must provide a unique email and secure password.
- Passwords should be hashed before saving to MongoDB.

### Acceptance Criteria
- **Given** the user is on the registration page,  
- **When** they enter valid credentials and click register,  
- **Then** an account is created and a success message is displayed.

---

## 2. Browse Gifts
**As a** logged-in user,  
**I need** to view a list of all available gifts,  
**So that** I can select an item I want to claim.

### Details and Assumptions
- Gifts are fetched from the `/api/gifts` endpoint.
- Network errors should be handled gracefully.

### Acceptance Criteria
- **Given** the user is on the main dashboard,  
- **When** the page loads successfully,  
- **Then** a list of gift cards with details is rendered on the screen.