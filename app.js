const poseData = data;

const urlGenerator = (pose) => {
  const baseUrl = 'https://www.yogajournal.com/poses/search?query=';

  let corrected = pose.replace(' ', '%20');
  let finalUrl = baseUrl + corrected;
  return finalUrl;

}


const buildBank = () => {

  for (let x = 0; x < poseData.length; x++) {

    const {english_name, img_url, sanskrit_name, id} = poseData[x];
    const url = urlGenerator(english_name);

    // Build pose element
    const base = '<li class="drag"></li>';
    console.log(base);
    const posePic = `<div class="pose-pic"><img src="${img_url}"></div>`;
    const sanskrit = `<div class="sanskrit">${sanskrit_name}</div>`;





    $('#bank ul').append(`<li class="drag"><div>${english_name}${posePic}<br>
    <a href="${url}" target="_blank"><i class="fas fa-info-circle info"></i></a>${sanskrit}</div><a class="add-button" style="float:right;">+</a></li>`);
  }

}
buildBank();

$('.add-button').on('click',function() {
  const $this = $(this);
  const $parent = $this.parent();

  $parent.clone().appendTo("#sortable2");
//  $('#sortable2').append($parent);
  $("#sortable2").sortable('refresh');
});
