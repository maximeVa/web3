import { ProviderWrapper as LanguageProviderWrapper } from "../../contexts/CountersContext";
import App from "./App.js";

const AppLoader= () => {
  return (
    <LanguageProviderWrapper >
        <App></App>

      </LanguageProviderWrapper >
  )
}
export default AppLoader;