const baseURL = `${window.location.protocol}//${window.location.host}`;

fetch(`${baseURL}/rest/2.0/auth/sessions/current?include=user`)
  .then(r => r.json())
  .then(({ user }) => {
    console.log("User session loaded successfully:", user);
    document.getElementById('name').textContent = `${user.firstName} ${user.lastName}`;
  })
  .catch(() => {
    console.log("Unable to load user session");
    document.getElementById('name').textContent = 'Unable to load user';
  });