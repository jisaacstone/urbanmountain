window.addEventListener("load", () => {
  console.log("page is fully loaded");
  document.getElementById("subscribe-show").addEventListener("click", showSubscribeDialog);
  document.getElementById("subscribe-cancel").addEventListener("click", hideSubscribeDialog);
  document.getElementById("subscribe-submit").addEventListener("click", () => {
    submitSubscribe().then(handleResp);
  });
});

async function submitSubscribe() {
  const email = document.getElementById("subscribe-email").value;
  const response = await fetch(
    "/urbanism/cgi/newsletter.cgi",
    {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ subscribe: email })
    }
  );
  const resp = await response.json();
  console.log(resp);
  return resp;
}

async function handleResp(resp) {
  hideSubscribeDialog();
  const modal = document.createElement('div');
  modal.classList.add('modal-dialog');
  modal.innerHTML = '<p>Successfully signed up to recieve e-mails<p>Whenever a new post is posted';
  document.getElementsByTagName('footer')[0].appendChild(modal);
  await new Promise(resolve => setTimeout(resolve, 3000));
  modal.remove();
}

function showSubscribeDialog() {
  document.getElementById("subscribe-dialog").classList.remove("hidden");
}

function hideSubscribeDialog() {
  document.getElementById("subscribe-dialog").classList.add("hidden");
}

console.log('script loaded;');
