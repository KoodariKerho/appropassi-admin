export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Admin demo site for Appropassi</h1>
        <nav>
          <ul>
            <li>
              <a href={`home`}>Home</a>
            </li>
            <li>
              <a href={`dashboard`}>Dashboard</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
