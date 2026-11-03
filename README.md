# one_vassa

Monorepo with an Angular frontend and an ASP.NET Core 10 backend.

```
onevassa/
├── .gitignore          # single root ignore file for both projects
├── frontend/           # Angular 22 (standalone, SCSS, npm)
└── backend/            # ASP.NET Core 10 Web API (controllers + OpenAPI)
```

## Frontend — `frontend/`

Angular 22 with standalone components, SCSS, and Vitest configured by the CLI.

```bash
cd frontend
npm install        # only needed on a fresh clone
npm start          # dev server at http://localhost:4200
npm run build      # production build into dist/frontend
npm test           # unit tests
```

## Backend — `backend/`

ASP.NET Core Web API targeting `net10.0`.

```bash
cd backend
dotnet run         # listens on http://localhost:5092 (https profile also available)
dotnet build
```

Sample endpoint: `GET /weatherforecast` — OpenAPI document at `/openapi/v1.json` in Development.

### CORS

CORS is enabled through a named policy (`FrontendCors`) applied in `Program.cs`.
Allowed origins live in `backend/appsettings.json`:

```json
"Cors": {
  "AllowedOrigins": [
    "http://localhost:4200",
    "https://localhost:4200"
  ]
}
```

Add your deployed frontend origins to that array. If the section is missing, the API
falls back to `http://localhost:4200`; a disallowed origin receives no CORS headers.

## Notes

- `frontend/.gitignore` and template ignore files were intentionally removed — everything is covered by the root `.gitignore`.
- The .NET SDK on PATH may be older; this project was created and verified with SDK `10.0.301` (`~/.dotnet/dotnet`).
