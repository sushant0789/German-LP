$(function () {
  $(".pop").on("click", function () {
    $(".imagepreview").attr("src", $(this).find("img").attr("src"));
    $("#imagemodal").modal("show");
  });
});

const video = document.getElementById("video");

// Get access to the camera!
async function playVideo() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    handleSuccess(stream);
    video.play();
  } catch (e) {
    $("#successMsg").hide();
    $("#errorMsg").show();
    $("#video").hide();
    $(".video-bg").show();
  }
}

// Success
function handleSuccess(stream) {
  window.stream = stream;
  video.srcObject = stream;
}

$(document).on("click", ".video-bg", function () {
  $(this).hide();
  $("#video").show();
});
