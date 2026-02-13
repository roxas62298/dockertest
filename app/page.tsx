export const dynamic = "force-dynamic"; // ensures fresh render (no caching surprises)

const BUILD_TIME = new Date().toISOString(); // will change ONLY when you rebuild/redeploy

export default function Home() {
  // Change this string whenever you want to test updates
  const VERSION = "vHALOEOEOOE";

  return (
    <main style={{ fontFamily: "system-ui", padding: 24, maxWidth: 800 }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>VERSION: 1234</h1>

  
    </main>
  );
}
