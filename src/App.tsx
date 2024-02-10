import Container from "./component/container/Container";
import AppRouter from "./component/appRouter/AppRouter";
import Tooltip from "./ui/tooltip/Tooltip";
import { useAppSelector } from "./shared/hook/redux";
import { getTooltip } from "./store/selectors";

const App = () => {
  const tooltip = useAppSelector(getTooltip);

  return (
    <>
      <Container>
        <AppRouter />
      </Container>

      <Tooltip
        isOpen={tooltip.isOpen}
        text={tooltip.message}
        isError={tooltip.isError}
        isSuccess={tooltip.isSuccess}
      />
    </>
  );
};

export default App;
