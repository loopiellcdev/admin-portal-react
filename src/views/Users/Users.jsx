import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Table from "components/Table/Table.jsx";
import avatar from "assets/img/faces/marc.jpg";
import ReactVirtualizedTable from "components/ReactVirtualizedTable/ReactVirtualizedTable.jsx";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

function UserProfile(props) {
  const { classes } = props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
        <Card>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>Washers</h4>
            <p className={classes.cardCategoryWhite}>
              Here's a list of all washers.
            </p>
            <ReactVirtualizedTable/>
          </CardHeader>

        </Card>

        <Card>
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}>Drivers</h4>
            <p className={classes.cardCategoryWhite}>
              Here's a list of all drivers.
            </p>
            <ReactVirtualizedTable/>
          </CardHeader>
          <CardBody style={{maxHeight: 250, overflow: 'auto'}}>
          </CardBody>
        </Card>

        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Customers</h4>
            <p className={classes.cardCategoryWhite}>
              Here's a list of all customers.
            </p>
            <ReactVirtualizedTable/>
          </CardHeader>
          <CardBody style={{maxHeight: 250, overflow: 'auto'}}>
          {/*
            <Table
              tableHeaderColor="warning"
              tableHead={["ID", "Name", "Salary", "Country"]}
              tableData={[
                ["1", "Dakota Rice", "$36,738", "Niger"],
                ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                ["4", "Dakota Rice", "$36,738", "Niger"],
                ["5", "Minerva Hooper", "$23,789", "Curaçao"],
                ["6", "Sage Rodriguez", "$56,142", "Netherlands"],
                ["7", "Dakota Rice", "$36,738", "Niger"],
                ["8", "Minerva Hooper", "$23,789", "Curaçao"],
                ["9", "Sage Rodriguez", "$56,142", "Netherlands"],
                ["10", "Dakota Rice", "$36,738", "Niger"],
                ["11", "Minerva Hooper", "$23,789", "Curaçao"],
                ["12", "Sage Rodriguez", "$56,142", "Netherlands"],
                ["13", "Philip Chaney", "$38,735", "Korea, South"]
              ]}
            />
            */}
          </CardBody>
        </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#dakota" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>Washer</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don't be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(styles)(UserProfile);
