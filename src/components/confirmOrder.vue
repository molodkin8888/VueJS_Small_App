<template>
  <confirm-order>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-sm-12 col-xs-12 mt-5">
          <h3>Confirm order</h3>
            <el-form ref="form"
              :model="form" label-width="120px">
            <el-form-item label="First name"  prop="firstName" :rules="firstName">
              <el-input v-model="form.firstName"></el-input>
            </el-form-item>
            <el-form-item label="Last name"  prop="lastName" :rules="lastName">
              <el-input v-model="form.lastName"></el-input>
            </el-form-item>
            <el-form-item label="Email" prop="email" :rules="requieredEmail">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="Country">
              <el-autocomplete
              v-model="form.country"
              :fetch-suggestions="querySearchAsync"
              placeholder="Please input"
              @select="handleSelect"
              style="float: left;"
              ></el-autocomplete>
            </el-form-item>
            <el-form-item label="Time of delivery">
              <el-col :span="11">
              <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
              <el-time-picker type="fixed-time" placeholder="Pick a time" v-model="form.date2" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="Discount coupon">
              <el-switch v-model="form.discount"></el-switch>
            </el-form-item>
            <el-form-item label="Choose options">
              <el-checkbox-group v-model="form.type">
              <el-checkbox label="Free packages" name="type"></el-checkbox>
              <el-checkbox label="3 years warranty" name="type"></el-checkbox>
              <el-checkbox label="Free service" name="type"></el-checkbox>
              <el-checkbox label="Install software" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Payments">
              <el-radio-group v-model="form.payments">
              <el-radio label="Cashless payments"></el-radio>
              <el-radio label="Cash payments"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="Activity form">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
              <el-button type="primary" @click="submitForm('form')">Submit</el-button>
              <router-link to="/shop" style="margin-left: 5px;"><el-button>Cancel</el-button></router-link>
            </el-form>
          </div>
      </div>
  </div>
  </confirm-order>
</template>

<script>
export default {
  data() {
    return {
      form: {
        links: [],
        firstName: "",
        lasttName: "",
        date1: "",
        date2: "",
        country: "",
        discount: false,
        type: [],
        payments: "",
        desc: "",
        email: "",
        timeout: null
      }
    };
  },

  props: {
    requieredEmail: {
      type: Array,
      default: [
        {
          required: true,
          message: "Please input email address",
          trigger: "blur"
        },
        {
          type: "email",
          message: "Please input correct email address",
          trigger: ["blur", "change"]
        }
      ]
    },

    firstName: {
      type: Array,
      default: [
        {
          required: true,
          message: "Please input first name",
          trigger: "blur"
        }
      ]
    },

    lastName: {
      type: Array,
      default: [
        {
          required: true,
          message: "Please input last name",
          trigger: "blur"
        }
      ]
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("Success!");
        } else {
          alert("error submit!!");
          return false;
        }
      });
    },

    loadAll() {
      return [
        { value: "Albania" },
        { value: "Belarus" },
        { value: "Brazil" },
        { value: "Denmark" },
        { value: "Germany" },
        { value: "Russia" }
      ];
    },
    querySearchAsync(queryString, cb) {
      var value = this.value;
      var results = queryString
        ? value.filter(this.createFilter(queryString))
        : value;

    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      cb(results);
    }, 1200 * Math.random());
    },
    createFilter(queryString) {
      return value => {
        return (
          value.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },

    handleSelect(item) {
      //console.log(item);
    }
  },
  mounted() {
    this.value = this.loadAll();
  }
};
</script>

<style>
</style>
