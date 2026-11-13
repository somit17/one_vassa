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

The plan form posts to `http://localhost:5092/api/plan` via `src/app/services/plan.service.ts`.

## Backend — `backend/`

ASP.NET Core Web API targeting `net10.0`.

```bash
cd backend
dotnet run         # listens on http://localhost:5092 (https profile also available)
dotnet build
```

`POST /api/plan` receives the "Plan an experience" enquiry (validated with DataAnnotations)
and saves it to MongoDB. OpenAPI document at `/openapi/v1.json` in Development.

### MongoDB (local)

Requires a local MongoDB server on port `27017`:

```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

If Homebrew cannot install it (for example outdated Xcode Command Line Tools), use the
official macOS tarball extracted to `~/mongodb` and start it with the bundled script:

```bash
./scripts/start-mongodb.sh
```

Connection settings live in `backend/appsettings.json`:

```json
"MongoDb": {
  "ConnectionString": "mongodb://localhost:27017",
  "DatabaseName": "onevassa",
  "PlanEnquiriesCollectionName": "planEnquiries"
}
```

The API creates the `onevassa` database, the `planEnquiries` collection, and a
descending index on `createdAtUtc` on startup. Enquiries can be inspected with:

```bash
mongosh onevassa --eval 'db.planEnquiries.find().sort({ createdAtUtc: -1 }).limit(5)'
```

Override the connection without committing secrets via environment variables:

```bash
MongoDb__ConnectionString="mongodb://localhost:27017" dotnet run
```

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
