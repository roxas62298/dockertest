export const dynamic = "force-dynamic"; // ensures fresh render (no caching surprises)

const BUILD_TIME = new Date().toISOString(); // will change ONLY when you rebuild/redeploy

export default function Home() {
  // Change this string whenever you want to test updates
  const VERSION = "vHALOEOEOOE";

  return (
    <main style={{ fontFamily: "system-ui", padding: 24, maxWidth: 800 }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>Next.js Docker Test</h1>

      <p style={{ marginTop: 0 }}>
        Edit <code>app/page.tsx</code>, redeploy, and you should see changes here.
      </p>

      <div
        style={{
          marginTop: 20,
          padding: 16,
          border: "1px solid #ddd",
          borderRadius: 12,
        }}
      >
        <p style={{ margin: 0 }}>
          <strong>Version:</strong> {VERSION}
        </p>

        <p style={{ margin: "8px 0 0" }}>
          <strong>Build time:</strong> {BUILD_TIME}
        </p>

        <p style={{ margin: "8px 0 0" }}>
          <strong>Server time (updates on refresh):</strong>{" "}
          {new Date().toLocaleString()}
        </p>
      </div>

      <ol style={{ marginTop: 20, lineHeight: 1.6 }}>
        <li>
          Change <strong>VERSION</strong> to <code>v2</code>, save.
        </li>
        <li>
          If you’re in dev mode: refresh the browser (or it hot reloads).
        </li>
        <li>
          If you’re in prod Docker: run{" "}
          <code>docker compose up -d --build</code>.
        </li>
      </ol>
    </main>
  );
}
