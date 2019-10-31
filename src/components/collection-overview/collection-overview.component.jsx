import React from "react";
import "./collection-overview.style.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectShopSection } from "../../redux/shop/shop.selectors";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = () =>
  createStructuredSelector({ collections: selectShopSection });

export default connect(mapStateToProps)(CollectionOverview);
