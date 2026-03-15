const steps = { s1: 0, s2: 33, s3: 66, s4: 100 };

  function goTo(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.getElementById('progress').style.width = steps[id] + '%';
    window.scrollTo(0, 0);
  }

  function launchReveal() {
    goTo('s4');
  }
