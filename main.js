const steps = { s1: 0, s2: 33, s3: 66, s4: 100 };

function goTo(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  target.classList.add('active');
  document.getElementById('progress').style.width = steps[id] + '%';

  // Scroll tanto el window como el elemento al tope
  window.scrollTo({ top: 0, behavior: 'instant' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  target.scrollTop = 0;
}

function launchReveal() {
  goTo('s4');
}
