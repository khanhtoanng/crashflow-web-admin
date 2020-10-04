<template>
  <div class="login-page">
    <el-main>
      <el-row justify="center" :gutter="20">
        <el-col :span="3" class="mt-5">
          <br />
        </el-col>
        <el-col :span="18" class="mt-5">
          <el-card>
            <el-row>
              <el-col :span="12" class="mt-3">
                <img src="../assets/loginBg.jpg" class="reponsive-image" />
              </el-col>
              <el-col :span="12">
                <h3 class="d-flex justify-content-center">Login Page</h3>
                <el-form ref="form" :model="form" class="m-4">
                  <el-form-item label="User name :">
                    <el-input
                      v-model="form.username"
                      clearable
                      placeholder="Username"
                      class=""
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="Password :">
                    <el-input
                      v-model="form.password"
                      placeholder="Password"
                      clearable
                      show-password
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button
                      class="w-100"
                      type="success"
                      round
                      @click="onClickLogin"
                      >Login
                    </el-button>
                  </el-form-item>
                  <el-form-item>
                    <el-button
                      class="w-100"
                      type="success"
                      round
                      @click="onClickLoginGG"
                      >Login with Google
                    </el-button>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("account", ["username", "password"])
  },
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions("account", ["login"]),
    ...mapMutations("account", ["setUsername", "setPassword"]),

    onClickLogin() {
      if (this.form.username.length == 0 || this.form.password.length == 0) {
        console.log("input wrong");
      } else {
        this.setUsername(this.form.username);
        this.setPassword(this.form.password);
        this.login();
        this.$router.push({
          name: "HomePage"
        });
      }
    },
    onClickLoginGG() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          console.log(result);
          console.log('aaaaa' , firebase.auth().currentUser.getIdToken());
        })
        .catch(error => {
          console.log(error);
        });
    },
    onClickStatus() {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log("User is signed in.");
        } else {
          // No user is signed in.
          console.log("User is NOT signed in.");
        }
      });
    },
    onClickLogout() {
      firebase
        .auth()
        .signOut()
        .then(function() {
          // Sign-out successful.
          console.log("SIGN-OUT");
        })
        .catch(function(error) {
          // An error happened.
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/login.scss";
</style>
