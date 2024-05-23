export const debounce = <T extends (...args: any[]) => void>(func: T, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

// Функция debounce принимает две вещи:
// Функцию func, которую нужно вызывать с задержкой.
// Число delay, определяющее, сколько времени в миллисекундах нужно ждать перед вызовом функции.
// Дженерик T должен быть функцией, которая принимает любые аргументы (это указывается с помощью ...args:
// any[]) и не возвращает ничего (void). Это позволяет debounce работать с любой функцией, независимо от ее аргументов.
// timeoutId будет хранить идентификатор таймера, который возвращается функцией setTimeout.
// Мы используем ReturnType<typeof setTimeout>, чтобы получить правильный тип для этого идентификатора
// (в Node.js и браузерах этот тип может быть разным).
// Parameters<T>: Это встроенный тип TypeScript, который берет тип функции T и возвращает кортеж типов ее параметров.
// Например, если T это функция (a: number, b: string) => void, то Parameters<T> будет [number, string].
// ReturnType<typeof setTimeout>: Это встроенный тип TypeScript, который возвращает тип значения, возвращаемого setTimeout.
