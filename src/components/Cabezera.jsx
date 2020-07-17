import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Cabezera = (props) => {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-danger bg-danger">
          
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              
            </ul>
          </div>
        </nav>

      </div>

    );
  }
export default Cabezera;
