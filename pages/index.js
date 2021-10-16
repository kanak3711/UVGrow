import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";
import styles from '../components/body.module.css';
class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }
  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Business</a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group  className={styles.card} items={items} />;
  }
  render() {
    return (
      <Layout >
        <div >
          <h3 style={{ color:"white"}}>Open for Funding and Mentorship</h3>
          <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create new Business"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
