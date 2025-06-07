document.getElementById('dataForm').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent page reload

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const age = document.getElementById('age').value;

  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = `
    <h3>Submitted Data:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Age:</strong> ${age}</p>
  `;

  // Optionally, clear the form
  document.getElementById('dataForm').reset();
});
