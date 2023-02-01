import "./App.css";
import { fetchDataFromApi } from "./utils/api";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import { AppDispatch, RootState } from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DetailsPage from "./pages/Details/DetailsPage";
import SearchResultPage from "./pages/SearchResult/SearchResultPage";
import NotFoundPage from "./pages/NotFound/NorFoundPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ExplorePage from "./pages/Explore/ExplorePage";

function App() {
  // @ts-ignore
  const { url } = useSelector<RootState>((state) => state.home);
  const dispatch = useDispatch<AppDispatch>();
  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };
  const genresCall = async () => {
    let promises = [] as any;
    let endPoint = ["tv", "movie"];
    let allGenres = {} as any;
    endPoint.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });
    const data = await Promise.all(promises);
    console.log(data);
    data.forEach(({ genres }) => {
      return genres.map((item: any) => (allGenres[item.id] = item));
    });
    dispatch(getGenres(allGenres));
  };

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
          <Route index element={<HomePage />} />
          <Route path="/:mediaType/:id" element={<DetailsPage />} />
          <Route path="/search/:query" element={<SearchResultPage />} />
          <Route path="/explore/:mediaType" element={<ExplorePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
