// access to the vertical timeline body element
const verticalTimelineBody = document.getElementsByClassName(
  "vertical_timeline_body"
)[0];

// this function is for add contentless div
const appendEmptyChild = (index, maxIndex) => {
  if (index != maxIndex - 1) {
    const createEmptyChildDiv = document.createElement("div");
    createEmptyChildDiv.classList.add("child");
    createEmptyChildDiv.innerHTML =
      index != maxIndex - 1
        ? ` <div class="child empty_child">
          <div class="left"></div>
          <div class=""></div>
        </div>`
        : "";
    verticalTimelineBody.appendChild(createEmptyChildDiv);
  }
};
// this function is for add contentfull div
const appendData = (data, index, maxIndex) => {
  const createChildDiv = document.createElement("div");
  createChildDiv.classList.add("child");
  createChildDiv.innerHTML = `
      <div class="left">
        <p>
          ${
            data?.startTime ? data?.startTime : "---"
          } <span class="circle"></span>
        </p>
        <p>
          ${data?.endTime ? data?.endTime : "---"} <span class="circle"></span>
        </p>
      </div>
      <div class="right">
        <p>
          ${data?.content ? data?.content : "---"}
        </p>
      </div>
  `;
  verticalTimelineBody.appendChild(createChildDiv);
  appendEmptyChild(index, maxIndex);
};
// Fetch all data from json file
const fetchData = async () => {
  let contentData;
  let res = await fetch("data.json");
  let resData = await res.json();
  contentData = resData.data;
  for (let index = 0; index < contentData.length; index++) {
    const element = contentData[index];
    appendData(element, index, contentData.length);
  }
};
//  call the fetchData function
fetchData();
