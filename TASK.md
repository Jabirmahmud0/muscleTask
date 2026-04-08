# Task Checklist

## Working Rules

- [ ] Do not change the existing UI design language unless the change is required to match the provided spec more accurately.
- [ ] Preserve the current landing page visuals while implementing missing functionality.
- [ ] Keep all new auth pages visually consistent with the existing landing page and spec reference.

## External Blocker

- [ ] API hosts provided in the spec/Postman collection are currently unreachable from this machine.
- [ ] Document the verified DNS failures for `frontend_api_test.test` and `apitest.softvencefsd.xyz` in the final submission.
- [ ] Keep the frontend ready for real integration once a working base URL or environment setup is provided.
- [ ] Add a mock/demo mode only if needed for assignment completeness, without misrepresenting it as live backend integration.

## Phase 1: Routing And App Structure

- [x] Install and configure `react-router-dom` v6.
- [x] Replace the single-page app shell with route-based pages for landing, login, registration, OTP verification, forgot password, and reset password.
- [x] Replace placeholder navbar links and register buttons with working route navigation.
- [ ] Implement the required redirect flow:
  [x] registration button -> registration page
  successful registration -> login page
  successful login -> landing page

## Phase 2: State And API Foundation

- [x] Add a global auth/session state using React Context plus `useReducer`.
- [x] Create a centralized API layer for the provided authentication endpoints.
- [x] Send requests as `multipart/form-data` using `FormData`.
- [x] Store the login token after successful authentication.
- [x] Send `Authorization: Bearer {{token}}` on authenticated requests.
- [x] Integrate the alternate base URL for the forgot verify OTP endpoint.
- [x] Persist auth state/token safely across refreshes.
- [x] Handle authenticated and unauthenticated app states consistently.

## Phase 3: Auth Flows

- [x] Implement registration flow.
- [x] Implement login flow.
- [x] Implement OTP verification flow.
- [x] Implement resend OTP flow.
- [x] Implement forgot password flow.
- [x] Implement forgot-password OTP verification flow.
- [x] Implement reset password flow.
- [x] Implement logout flow.
- [x] Implement user detail fetch flow.
- [x] Use the OTP returned by the API response as required by the spec.

## Phase 4: Forms And Validation

- [x] Install and use `react-hook-form` for all authentication forms.
- [x] Add validation for registration, login, OTP, forgot password, and reset password fields.
- [x] Handle loading, success, and error states in each form.

## Phase 5: Required Libraries

- [x] Install and use `lucide-react` where the spec requires icons.
- [x] Install and use `framer-motion` where the spec requires animations.

## Phase 6: UI Fidelity

- [ ] Audit the landing page against `UI.png` for pixel-accurate spacing, sizing, colors, and typography.
- [ ] Verify desktop, tablet, and mobile layouts against the design without redesigning the interface.
- [ ] Refine navbar, hero, newsletter, footer, and other sections only where the current implementation drifts from the provided design.

## Phase 7: Typography, Layout, And Quality

- [ ] Load the required fonts properly: Google Fonts `Tilt Warp` and `Satoshi`.
- [ ] Replace inline font assumptions with a consistent global typography setup.
- [ ] Remove ad hoc runtime style injection from `src/main.jsx` and move layout rules into the proper app styling structure.
- [ ] Create a predictable page container/layout system that supports pixel-accurate implementation.
- [ ] Fix text encoding artifacts and malformed characters in spec-derived content and component text.
- [ ] Review static copy for accuracy against the design and product requirements.

## Phase 8: Delivery

- [ ] Deploy the application to a hosting platform such as Vercel or Netlify.
- [ ] Add the live deployment URL to project documentation.
- [ ] Clearly document whether the project is using real API integration or mock/demo mode.
- [ ] Verify the hosted version is accessible and working end to end.
