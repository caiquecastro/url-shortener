import { shallowMount, mount } from "@vue/test-utils";
import UrlShortenerForm from "@/components/UrlShortenerForm.vue";

describe("UrlShortenerForm.vue", () => {
  it("renders input field", () => {
    const wrapper = shallowMount(UrlShortenerForm);

    const input = wrapper.find("input");

    expect(input.exists()).toBe(true);
  });

  it("binds the input value to the input data property", () => {
    const wrapper = shallowMount(UrlShortenerForm);

    const input = wrapper.find("input");

    input.setValue("http://google.com");

    expect(wrapper.vm.url).toEqual("http://google.com");
  });

  it("disables the form button when input is empty", () => {
    const wrapper = shallowMount(UrlShortenerForm);

    wrapper.setData({
      url: ""
    });

    const button = wrapper.find("button");

    expect(button.attributes().disabled).toBeTruthy();
  });

  it("enables the form button when input is not empty", () => {
    const wrapper = mount(UrlShortenerForm);

    wrapper.setData({
      url: "http://google.com"
    });

    const button = wrapper.find("button");

    expect(button.attributes().disabled).toBeUndefined();
  });
});
