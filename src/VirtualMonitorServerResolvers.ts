import { ApolloCache } from 'apollo-cache';

import { IConfiguration } from 'src/ui/ConfigurationList';

const resolvers = {
  Mutation: {
    // addStop: (_: any, { configuration, display }: { configuration: string, display: string }, { cache, getCacheKey }: any) => {
    //   cache.writeData();
    //   return null;
    // },
    createDisplay: (
      _: any,
      { configurationName, name }: { configurationName: string; name: string },
      { cache, getCacheKey }: { cache: ApolloCache<any>; getCacheKey: any },
    ) => null,
    createLocalConfiguration: (
      _: any,
      { name }: { name: string },
      { cache, getCacheKey }: { cache: ApolloCache<any>; getCacheKey: any },
    ) => null,
    modifyLocalConfigurations: (
      _: any,
      { configuration }: { configuration: IConfiguration },
      { cache, getCacheKey }: { cache: ApolloCache<any>; getCacheKey: any },
    ) => null,
  },
};

export default resolvers;
