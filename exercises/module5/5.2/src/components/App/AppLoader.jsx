import { ProviderWrapper as LanguageProviderWrapper } from "../../contexts/VoteContext";
import App from "./App.js";

const AppLoader= () => {
  return (
    <LanguageProviderWrapper >
        <App></App>

      </LanguageProviderWrapper >
  )
}
export default AppLoader;