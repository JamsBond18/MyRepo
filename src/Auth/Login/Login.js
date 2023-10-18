import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import css from '../Login.css'
const Login = () => {
  const submitLoginForm = (event) => {
    event.preventDefault();
  };
  return (
    <React.Fragment>
      <div fxLayoutAlign="center center" fxFlexFill class="main-div">
        <div fxFlex="25" class="card">
          <mat-toolbar color="primary">Login pag</mat-toolbar>
          <div fxLayoutAlign="stretch" class="example-form" fxLayout="column">
            <mat-form-field class="example-full-width">
              <mat-label>User Name</mat-label>
              <input
                matInput
                placeholder="Username"
                formControlName="UserName"
              />
            </mat-form-field>
            <mat-form-field class="example-full-width">
              <mat-label>Password</mat-label>
              <input
                matInput
                type="password"
                placeholder="Password"
                formControlName="Password"
              />
            </mat-form-field>
            <button mat-raised-button type="button" value="submit">
              Login
            </button>
            <button mat-raised-button type="button" value="submit">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Login;
