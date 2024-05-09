const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const Showcase = require(`${process.cwd()}/core/Showcase.js`);
const translate = require('../../server/translate.js').translate;

class Users extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    const fbUsersToShowcase = siteConfig.users.filter(
      (user) => user.fbOpenSource,
    );
    const restToShowcase = siteConfig.users.filter(
      (user) => !user.fbOpenSource,
    );

    return (
      <div className="mainContainer">
        <Container padding={['bottom']}>
          <div className="showcaseSection">
            <div className="prose">
              <h4>
                <translate>Thanks to all Quicksi Contributors</translate>
              </h4>
            </div>
            <Showcase users={fbUsersToShowcase} />
            <Showcase users={restToShowcase} />
            {/* <div className="prose">
              <p>
                <translate>Is your project using Docusaurus?</translate>
              </p>
              <p>
                Edit this page with a{' '}
                <a href="#">
                  Pull Request
                </a>{' '}
                to add your logo.
              </p>
            </div> */}
          </div>
        </Container>
      </div>
    );
  }
}

Users.title = 'Users';

module.exports = Users;
