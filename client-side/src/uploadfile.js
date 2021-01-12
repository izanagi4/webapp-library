import React, { Component } from "react";
import axios from "axios";

class uploadfile extends Component {
  onChangeHandler = (event) => {
    console.log(event.target.files[0]);
  };

  onClickHandler = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    axios
      .post("http://localhost:3001/uploadfile", data, {
        // receive two    parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        console.log(res.statusText);
      });
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
  }
  onChangeHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
  };

  render() {
    return (
      <div>
        <div class="col-md-6">
          <form method="post" action="#" id="#">
            <div class="form-group files color">
              <label>Upload Your File </label>
              <input
                type="file"
                class="form-control"
                multiple=""
                name="file"
                onChange={this.onChangeHandler}
              />
            </div>
            <button type="button" onClick={this.onClickHandler}>
              Upload
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default uploadfile;
