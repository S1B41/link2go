<template>
  <div>
    <div class="row">
      <div class="col col-12 offset-0 mt-2">
        <h1 class="jumbotron text-center text-white bg-primary">
          Create Short Link
        </h1>
      </div>
    </div>
    <div class="col col-8 align-middle mt-5 offset-2">
      <div class="card">
        <div class="card-body">
          <form @submit.prevent="submit(url)">
            <div class="form-group">
              <label for="url">Enter Url</label>
              <textarea
                type="url"
                class="form-control"
                v-model="url"
                style="width: 100%; height: 150px"
              />
            </div>
            <div class="for-group" v-show="shortUrl">
              <p>
                Short URL:
                <a :href="shortUrl" class="text-primary">{{ shortUrl }}</a>
                <br />
                <button @click.prevent="copyToCB">Copy</button>
              </p>
            </div>
            <div class="form-group">
              <button
                v-if="!this.shortUrl"
                class="btn btn-primary"
                type="submit"
              >
                Shorten URL
              </button>
              <button
                v-else
                class="btn btn-primary"
                @click.prevent="shortenAnotherUrl"
              >
                Shorten Another URL
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data: () => {
    return {
      url: "",
      shortUrl: "",
    }
  },
  methods: {
    submit: async function (url) {
      try {
        const api = "http://localhost:3000/url"
        const uuid = crypto.randomUUID()
        this.$cookies.set("l2g-uuid", uuid, "30d")
        const response = await axios.post(api, {
          url,
          uuid,
        })
        this.shortUrl = response.data.shortUrl
      } catch (error) {
        console.log(error)
      }
    },
    copyToCB: async function () {
      navigator.clipboard
        .writeText(this.shortUrl)
        .then(function () {
          alert("Text copied to clipboard!")
        })
        .catch(function (err) {
          console.error("Could not copy text: ", err)
        })
    },
    shortenAnotherUrl() {
      this.shortUrl = ""
      this.url = ""
    },
  },
}
</script>
