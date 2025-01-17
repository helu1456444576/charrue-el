import type { ElWrapper, ElVm } from "./common"

export const createElInputTestUtils = (wrapper: ElWrapper) => {
  const inputWrapper = wrapper.find<HTMLInputElement>('input');
  const nativeInput = inputWrapper.element
  const elInputWrapper = wrapper.findComponent({ name: 'el-input' })

  let hasInput = false

  // 检查是否存在input
  const checkElInput = () => {
    if (hasInput) return
    const exists = inputWrapper.exists()
    hasInput = exists
    expect(exists).toBe(true)
  }

  // 监听el-input的事件
  const listen = (eventName: string, cb: () => void) => elInputWrapper.vm.$on(eventName, cb)

  checkElInput()

  return {
    getElInputVm(): ElVm {

      return elInputWrapper.vm as ElVm
    },
    getInputWrapper(): ElWrapper {
      return elInputWrapper as ElWrapper
    },

    getValue(): string {
      return nativeInput.value
    },
    setValue(value: number | string) {
      inputWrapper.setValue(value)
    },
    listen(eventName: string, cb: () => void) {
      listen(eventName, cb)
    },

    async clear(): Promise<void> {
      const clearMock = jest.fn()
      // 如果值为空，无法触发clear事件
      expect(nativeInput.value).not.toBe("")

      wrapper.trigger("mouseenter")
      await wrapper.vm.$nextTick()

      listen("clear", clearMock)

      const clearIconWrapper = wrapper.find<HTMLElement>(".el-input__clear")
      clearIconWrapper.trigger("click");
      await wrapper.vm.$nextTick()

      expect(clearMock).toBeCalled()
    },
  }
}