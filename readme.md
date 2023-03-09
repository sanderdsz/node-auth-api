# Node Auth

> A minimal authentication and authorization server

This project aims to create a microservice for auth flow with local authentication, oauth2 with GitHub and Google.

### GitHub Flow

Using GitHub APP instalation for the authorization flow, because it's the only way that returns
a refresh_token, when the OAUTH flow implement's it, should be wise to change the provider from APP to OAUTH.

- [x] Redirect auth URL.
- [x] Access and refresh tokens creation.
- [x] User details persistence into MySQL.
- [x] Access token persistence into Redis.
- [x] Tokens revalidation and persistence.
- [ ] Tokens expire verification.

### Google Flow

- [x] Redirect auth URL.
- [ ] Access and refresh tokens creation.
- [ ] User details persistence into MySQL.
- [ ] Access token persistence into Redis.
- [ ] Tokens revalidation and persistence.
- [ ] Tokens expire verification.

### Internal Flow

- [ ] Access and refresh tokens creation.
- [ ] User details persistence into MySQL.
- [ ] Access token persistence into Redis.
- [ ] Tokens revalidation and persistence.
- [ ] Tokens expire verification.

### Database Chart

![Database Chart](.github/database-chart.png)
