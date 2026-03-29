const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const { httpbin } = require('../config/config');

describe("Testování API Endpointů - httpbin.org", () => {

  describe("HTTP Metody", () => {

    it("GET request", async () => {
      const res = await request(httpbin).get("/get");
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('headers');
      expect(res.body).to.have.property('url');
    });

    it("POST request s daty", async () => {
      const testData = { name: "Jiří", email: "jiri@example.com", age: 30 };
      const res = await request(httpbin)
        .post("/post")
        .send(testData);
      expect(res.status).to.equal(200);
      expect(res.body.json).to.deep.equal(testData);
    });

    it("PUT request", async () => {
      const testData = { name: "Jiří", email: "jiri@example.com", age: 31 };
      const res = await request(httpbin)
        .put("/put")
        .send(testData);
      expect(res.status).to.equal(200);
      expect(res.body.json.age).to.equal(31);
    });

    it("PATCH request", async () => {
      const res = await request(httpbin)
        .patch("/patch")
        .send({ age: 32 });
      expect(res.status).to.equal(200);
      expect(res.body.json.age).to.equal(32);
    });

    it("DELETE request", async () => {
      const res = await request(httpbin).delete("/delete");
      expect(res.status).to.equal(200);
      expect(res.body.method).to.equal('DELETE');
    });
  });

  describe("HTTP Status Kódy", () => {

    it("Status 200 - OK", async () => {
      const res = await request(httpbin).get("/status/200");
      expect(res.status).to.equal(200);
    });

    it("Status 404 - Not Found", async () => {
      const res = await request(httpbin).get("/status/404");
      expect(res.status).to.equal(404);
    });

    it("Status 500 - Internal Server Error", async () => {
      const res = await request(httpbin).get("/status/500");
      expect(res.status).to.equal(500);
    });
  });

  describe("Datové Formáty", () => {

    it("JSON endpoint", async () => {
      const res = await request(httpbin).get("/json");
      expect(res.status).to.equal(200);
      expect(res.body.slideshow.author).to.equal("Yours Truly");
      expect(res.body.slideshow.title).to.equal("Sample Slide Show");
    });

    it("HTML endpoint", async () => {
      const res = await request(httpbin).get("/html");
      expect(res.status).to.equal(200);
      expect(res.type).to.equal('text/html');
      expect(res.text).to.include('<html>');
    });

    it("XML endpoint", async () => {
      const res = await request(httpbin).get("/xml");
      expect(res.status).to.equal(200);
      expect(res.type).to.equal('text/xml');
      expect(res.text).to.include('<?xml');
    });
  });

  describe("Request Data", () => {

    it("Headers endpoint", async () => {
      const res = await request(httpbin)
        .get("/headers")
        .set("X-Custom-Header", "TestValue");
      expect(res.status).to.equal(200);
      expect(res.body.headers).to.have.property('Host');
      expect(res.body.headers['X-Custom-Header']).to.equal('TestValue');
    });

    it("User-Agent endpoint", async () => {
      const res = await request(httpbin).get("/user-agent");
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('user-agent');
    });

    it("IP endpoint", async () => {
      const res = await request(httpbin).get("/ip");
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('origin');
      expect(res.body.origin).to.match(/^\d+\.\d+\.\d+\.\d+$/);
    });
  });

  describe("Cookies", () => {

    it("Cookies endpoint", async () => {
      const res = await request(httpbin).get("/cookies");
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('cookies');
    });
  });

  describe("Zpoždění a Timeouty", () => {

    it("Delay 1 sekunda", async () => {
      const start = Date.now();
      const res = await request(httpbin)
        .get("/delay/1")
        .timeout(5000);
      const elapsed = Date.now() - start;
      expect(res.status).to.equal(200);
      expect(elapsed).to.be.at.least(1000);
    });
  });

  describe("Dynamické Cesty", () => {

    it("ANYTHING endpoint - vlastní cesta", async () => {
      const res = await request(httpbin)
        .get("/anything/custom/path/with/data");
      expect(res.status).to.equal(200);
      expect(res.body.path).to.equal('/anything/custom/path/with/data');
      expect(res.body.method).to.equal('GET');
    });
  });
});


