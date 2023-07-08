fetch(
    "http://api.sprightsoft.shreekakajimasale.com/api/v1/user/getAllJobDescription?limit=10&pageNo=0"
  )
    .then((data) => {
      // console.log(data);
      return data.json();
    })
    .then((completedata) => {
      console.log(completedata);
      // document.getElementById('root').
      //     innerHTML = completedata[2].title;
      let data1 = "";
      completedata.data.JobDescription.map((values) => {
        data1 += `
                  <div class="col-md-12 col-lg-12 d-flex justify-content-center mb-5">
                <div class="card" style="width: 70%">
                  <div class="card-body">
                    <h4>${values.job_title}</h4>
                    <p>
                      <i class="fa fa-briefcase" aria-hidden="true"></i>
                      ${values.job_type}
                      <br />
                      <i class="fa fa-briefcase" aria-hidden="true"></i>
                      ${values.openings}
                    </p>
  
                    <ul id="jobcard">
                      <li>
                        <i class="fa fa-briefcase" aria-hidden="true"></i
                        >${values.experience}
                      </li>
                      <li>
                        <i class="fa fa-inr" aria-hidden="true" class="mr-2"></i>
                        ${values.salary}
                      </li>
                      <li>
                        <i class="fa fa-map-marker" aria-hidden="true"></i
                        >${values.location}
                      </li>
                    </ul>
                    <p>
                      <i class="fa fa-file-code-o" aria-hidden="true"></i>
                      ${values.skills}
                    </p>
                    <p>
                      <a href="career_single.html" onclick="singleJob(${values.id})"
                        class="btn btn-outline-primary btn-sm rounded-0 p-2 px-4"
                     
                        >View Details
                        </a>
                    </p>
                  </div>
                </div>
              </div>`;
      });
      document.getElementById("cards").innerHTML = data1;
    })
    .catch((err) => {
      console.log(err);
    });
  
  function testJS() {
    var b = document.getElementById("name").value,
      url = "http://career_single.html?name=" + encodeURIComponent(b);
  
    document.location.href = url;
  }
  
  function singleJob(id) {
    console.log(id);
    localStorage.setItem("id", id);
    link.href = "/career_single.html";
  }
  
  function viewAllJobs() {
    fetch(
      "http://api.sprightsoft.shreekakajimasale.com/api/v1/user/getAllJobDescription"
    )
      .then((data) => {
        // console.log(data);
        return data.json();
      })
      .then((completedata) => {
        // console.log(completedata);
        // document.getElementById('root').
        //     innerHTML = completedata[2].title;
        let data1 = "";
        completedata.data.JobDescription.map((values) => {
          // console.log(values);
          data1 += `
                  <div class="col-md-12 col-lg-12 d-flex justify-content-center mb-5">
                <div class="card" style="width: 70%">
                  <div class="card-body">
                    <h4>${values.job_title}</h4>
                    <p>
                      <i class="fa fa-briefcase" aria-hidden="true"></i>
                      ${values.job_type}
                      <br />
                      <i class="fa fa-briefcase" aria-hidden="true"></i>
                      ${values.openings}
                    </p>
  
                    <ul id="jobcard">
                      <li>
                        <i class="fa fa-briefcase" aria-hidden="true"></i
                        >${values.experience}
                      </li>
                      <li>
                        <i class="fa fa-inr" aria-hidden="true" class="mr-2"></i>
                        ${values.salary}
                      </li>
                      <li>
                        <i class="fa fa-map-marker" aria-hidden="true"></i
                        >${values.location}
                      </li>
                    </ul>
                    <p>
                      <i class="fa fa-file-text-o" aria-hidden="true"></i>
                      ${values.skills}
                    </p>
                    <p>
                      <a
                        data-toggle="collapse"
                        href="#collapse1"
                        aria-expanded="false"
                        aria-controls="collapse1"
                        class="btn btn-outline-primary btn-sm rounded-0 p-2 px-4"
                        onclick="singleJob(0)"
                        id="card1"
                        >View Details</a
                      >
                    </p>
                  </div>
                </div>
              </div>`;
        });
        document.getElementById("cards").innerHTML = data1;
      })
      .catch((err) => {
        console.log(err);
      });
  
    function testJS() {
      var b = document.getElementById("name").value,
        url = "http://career_single.html?name=" + encodeURIComponent(b);
  
      document.location.href = url;
    }
  
    function singleJob(id) {
      console.log(id);
      localStorage.setItem("id", id);
      link.href = "/career_single.html";
    }
    document.getElementById("viewAllJobs").style.display = "none";
  }
  