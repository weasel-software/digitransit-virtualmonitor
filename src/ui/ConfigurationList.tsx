import gql from "graphql-tag";
import * as React from "react";
import { Mutation } from "react-apollo";
import { InjectedTranslateProps, translate } from "react-i18next";

import ConfigEditor from "src/ui/ConfigEditor";
import { ILatLon } from "src/ui/LatLonEditor";
import { ApolloClientsContext } from "src/VirtualMonitorApolloClients";

interface ITranslatedString {
  readonly [twoLetterLanguageCode: string]: string;
};

interface IStop {
  readonly gtfsId: string;
};

export interface IDisplay {
  readonly position?: ILatLon;
  readonly title?: ITranslatedString;
  readonly stops: {
    readonly [gtfsId: string]: IStop,
  },
};

export interface IConfiguration {
  readonly name: string,
  readonly displays: {
    readonly [displayId: string]: IDisplay,
  },
  readonly position?: ILatLon;
};

export interface IConfigurations {
  readonly [configurationName: string]: IConfiguration,
};

export interface IConfigurations2 {
  [configurationName: string]: IConfiguration,
};

export interface IConfigurationListProps {
  readonly configurations: IConfigurations,
};

const createLocalConfiguration = gql`
  mutation createLocalConfiguration($name: String!) {
    createLocalConfiguration(name: $name) @client
  }
`;

const ConfigurationList = ({configurations, t}: IConfigurationListProps & InjectedTranslateProps ) => (
  <div>
    {Object.values(configurations).map((configuration, i) => (
      <ConfigEditor
        key={`${configuration.name}${i}`}
        configuration={configuration}
      />
    ))}
    <ApolloClientsContext.Consumer>
      {({ virtualMonitor }) =>
        (<Mutation
          mutation={createLocalConfiguration}
          client={virtualMonitor}
        >
          {createLocalConfiguration => (
            <button onClick={() => createLocalConfiguration({ variables: { name: 'Derp'}}) }>
              {t('prepareConfiguration')}
            </button>
          )}
        </Mutation>)
      }
    </ApolloClientsContext.Consumer>
  </div>
);

export default translate('translations')(ConfigurationList);
