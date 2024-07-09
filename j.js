document.getElementById('categoryForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const category = document.getElementById('category').value;

  if (category === 'angel') {
    window.location.href = 'angel.htm';
  } else if (category === 'sun') {
    window.location.href = 'sun.htm';
  } else if (category === 'moon') {
    window.location.href = 'moon.htm';
  }
  else if (category === 'zog') {
    window.location.href = 'zog.htm';
  }
  else if (category === 'index') {
    window.location.href = 'index.htm';
  }
});
