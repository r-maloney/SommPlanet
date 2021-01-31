import Region from "../Region";
import { useParams, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountries } from "../../store/country";
import Article from "../Article";
import RegionDetails from "../RegionDetails/RegionDetails";
import ArticleFormModal from "../ArticleFormModal";
import "./CountryDetails.css";

const CountryDetails = () => {
  const { countryId } = useParams();
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.country);
  const country = countries[countryId];

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <>
      <h2 className='country__header'>{country.name}</h2>
      <div>
        <Region />
      </div>
      <div className='region__container'>
        <Switch>
          <Route path={`/countries/${countryId}/:regionId`}>
            <RegionDetails />
          </Route>
        </Switch>
      </div>

      <div>
        <div className='article__form-header'>
          <ArticleFormModal />
          <h2 className='article__list-header'>
            What people are saying about {country.name}
          </h2>
        </div>
        <Article country={country} />
      </div>
    </>
  );
};

export default CountryDetails;
