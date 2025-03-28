/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutIndexImport } from './routes/_layout/index'
import { Route as LayoutTermsImport } from './routes/_layout/terms'
import { Route as LayoutReportImport } from './routes/_layout/report'
import { Route as LayoutPrivacyRequestImport } from './routes/_layout/privacy-request'
import { Route as LayoutPrivacyImport } from './routes/_layout/privacy'
import { Route as LayoutCookieImport } from './routes/_layout/cookie'
import { Route as LayoutComplianceImport } from './routes/_layout/compliance'
import { Route as LayoutSolutionsTrainingAiImport } from './routes/_layout/solutions/training-ai'
import { Route as LayoutSolutionsPriceMonitoringImport } from './routes/_layout/solutions/price-monitoring'
import { Route as LayoutSolutionsMarketResearchImport } from './routes/_layout/solutions/market-research'
import { Route as LayoutSolutionsDemoRequestImport } from './routes/_layout/solutions/demo-request'

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexRoute = LayoutIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutTermsRoute = LayoutTermsImport.update({
  id: '/terms',
  path: '/terms',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutReportRoute = LayoutReportImport.update({
  id: '/report',
  path: '/report',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutPrivacyRequestRoute = LayoutPrivacyRequestImport.update({
  id: '/privacy-request',
  path: '/privacy-request',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutPrivacyRoute = LayoutPrivacyImport.update({
  id: '/privacy',
  path: '/privacy',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutCookieRoute = LayoutCookieImport.update({
  id: '/cookie',
  path: '/cookie',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutComplianceRoute = LayoutComplianceImport.update({
  id: '/compliance',
  path: '/compliance',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutSolutionsTrainingAiRoute = LayoutSolutionsTrainingAiImport.update({
  id: '/solutions/training-ai',
  path: '/solutions/training-ai',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutSolutionsPriceMonitoringRoute =
  LayoutSolutionsPriceMonitoringImport.update({
    id: '/solutions/price-monitoring',
    path: '/solutions/price-monitoring',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutSolutionsMarketResearchRoute =
  LayoutSolutionsMarketResearchImport.update({
    id: '/solutions/market-research',
    path: '/solutions/market-research',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutSolutionsDemoRequestRoute = LayoutSolutionsDemoRequestImport.update(
  {
    id: '/solutions/demo-request',
    path: '/solutions/demo-request',
    getParentRoute: () => LayoutRoute,
  } as any,
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/_layout/compliance': {
      id: '/_layout/compliance'
      path: '/compliance'
      fullPath: '/compliance'
      preLoaderRoute: typeof LayoutComplianceImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/cookie': {
      id: '/_layout/cookie'
      path: '/cookie'
      fullPath: '/cookie'
      preLoaderRoute: typeof LayoutCookieImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/privacy': {
      id: '/_layout/privacy'
      path: '/privacy'
      fullPath: '/privacy'
      preLoaderRoute: typeof LayoutPrivacyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/privacy-request': {
      id: '/_layout/privacy-request'
      path: '/privacy-request'
      fullPath: '/privacy-request'
      preLoaderRoute: typeof LayoutPrivacyRequestImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/report': {
      id: '/_layout/report'
      path: '/report'
      fullPath: '/report'
      preLoaderRoute: typeof LayoutReportImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/terms': {
      id: '/_layout/terms'
      path: '/terms'
      fullPath: '/terms'
      preLoaderRoute: typeof LayoutTermsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/': {
      id: '/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutIndexImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/solutions/demo-request': {
      id: '/_layout/solutions/demo-request'
      path: '/solutions/demo-request'
      fullPath: '/solutions/demo-request'
      preLoaderRoute: typeof LayoutSolutionsDemoRequestImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/solutions/market-research': {
      id: '/_layout/solutions/market-research'
      path: '/solutions/market-research'
      fullPath: '/solutions/market-research'
      preLoaderRoute: typeof LayoutSolutionsMarketResearchImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/solutions/price-monitoring': {
      id: '/_layout/solutions/price-monitoring'
      path: '/solutions/price-monitoring'
      fullPath: '/solutions/price-monitoring'
      preLoaderRoute: typeof LayoutSolutionsPriceMonitoringImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/solutions/training-ai': {
      id: '/_layout/solutions/training-ai'
      path: '/solutions/training-ai'
      fullPath: '/solutions/training-ai'
      preLoaderRoute: typeof LayoutSolutionsTrainingAiImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

interface LayoutRouteChildren {
  LayoutComplianceRoute: typeof LayoutComplianceRoute
  LayoutCookieRoute: typeof LayoutCookieRoute
  LayoutPrivacyRoute: typeof LayoutPrivacyRoute
  LayoutPrivacyRequestRoute: typeof LayoutPrivacyRequestRoute
  LayoutReportRoute: typeof LayoutReportRoute
  LayoutTermsRoute: typeof LayoutTermsRoute
  LayoutIndexRoute: typeof LayoutIndexRoute
  LayoutSolutionsDemoRequestRoute: typeof LayoutSolutionsDemoRequestRoute
  LayoutSolutionsMarketResearchRoute: typeof LayoutSolutionsMarketResearchRoute
  LayoutSolutionsPriceMonitoringRoute: typeof LayoutSolutionsPriceMonitoringRoute
  LayoutSolutionsTrainingAiRoute: typeof LayoutSolutionsTrainingAiRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutComplianceRoute: LayoutComplianceRoute,
  LayoutCookieRoute: LayoutCookieRoute,
  LayoutPrivacyRoute: LayoutPrivacyRoute,
  LayoutPrivacyRequestRoute: LayoutPrivacyRequestRoute,
  LayoutReportRoute: LayoutReportRoute,
  LayoutTermsRoute: LayoutTermsRoute,
  LayoutIndexRoute: LayoutIndexRoute,
  LayoutSolutionsDemoRequestRoute: LayoutSolutionsDemoRequestRoute,
  LayoutSolutionsMarketResearchRoute: LayoutSolutionsMarketResearchRoute,
  LayoutSolutionsPriceMonitoringRoute: LayoutSolutionsPriceMonitoringRoute,
  LayoutSolutionsTrainingAiRoute: LayoutSolutionsTrainingAiRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof LayoutRouteWithChildren
  '/compliance': typeof LayoutComplianceRoute
  '/cookie': typeof LayoutCookieRoute
  '/privacy': typeof LayoutPrivacyRoute
  '/privacy-request': typeof LayoutPrivacyRequestRoute
  '/report': typeof LayoutReportRoute
  '/terms': typeof LayoutTermsRoute
  '/': typeof LayoutIndexRoute
  '/solutions/demo-request': typeof LayoutSolutionsDemoRequestRoute
  '/solutions/market-research': typeof LayoutSolutionsMarketResearchRoute
  '/solutions/price-monitoring': typeof LayoutSolutionsPriceMonitoringRoute
  '/solutions/training-ai': typeof LayoutSolutionsTrainingAiRoute
}

export interface FileRoutesByTo {
  '/compliance': typeof LayoutComplianceRoute
  '/cookie': typeof LayoutCookieRoute
  '/privacy': typeof LayoutPrivacyRoute
  '/privacy-request': typeof LayoutPrivacyRequestRoute
  '/report': typeof LayoutReportRoute
  '/terms': typeof LayoutTermsRoute
  '/': typeof LayoutIndexRoute
  '/solutions/demo-request': typeof LayoutSolutionsDemoRequestRoute
  '/solutions/market-research': typeof LayoutSolutionsMarketResearchRoute
  '/solutions/price-monitoring': typeof LayoutSolutionsPriceMonitoringRoute
  '/solutions/training-ai': typeof LayoutSolutionsTrainingAiRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/_layout/compliance': typeof LayoutComplianceRoute
  '/_layout/cookie': typeof LayoutCookieRoute
  '/_layout/privacy': typeof LayoutPrivacyRoute
  '/_layout/privacy-request': typeof LayoutPrivacyRequestRoute
  '/_layout/report': typeof LayoutReportRoute
  '/_layout/terms': typeof LayoutTermsRoute
  '/_layout/': typeof LayoutIndexRoute
  '/_layout/solutions/demo-request': typeof LayoutSolutionsDemoRequestRoute
  '/_layout/solutions/market-research': typeof LayoutSolutionsMarketResearchRoute
  '/_layout/solutions/price-monitoring': typeof LayoutSolutionsPriceMonitoringRoute
  '/_layout/solutions/training-ai': typeof LayoutSolutionsTrainingAiRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/compliance'
    | '/cookie'
    | '/privacy'
    | '/privacy-request'
    | '/report'
    | '/terms'
    | '/'
    | '/solutions/demo-request'
    | '/solutions/market-research'
    | '/solutions/price-monitoring'
    | '/solutions/training-ai'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/compliance'
    | '/cookie'
    | '/privacy'
    | '/privacy-request'
    | '/report'
    | '/terms'
    | '/'
    | '/solutions/demo-request'
    | '/solutions/market-research'
    | '/solutions/price-monitoring'
    | '/solutions/training-ai'
  id:
    | '__root__'
    | '/_layout'
    | '/_layout/compliance'
    | '/_layout/cookie'
    | '/_layout/privacy'
    | '/_layout/privacy-request'
    | '/_layout/report'
    | '/_layout/terms'
    | '/_layout/'
    | '/_layout/solutions/demo-request'
    | '/_layout/solutions/market-research'
    | '/_layout/solutions/price-monitoring'
    | '/_layout/solutions/training-ai'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LayoutRoute: typeof LayoutRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  LayoutRoute: LayoutRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/compliance",
        "/_layout/cookie",
        "/_layout/privacy",
        "/_layout/privacy-request",
        "/_layout/report",
        "/_layout/terms",
        "/_layout/",
        "/_layout/solutions/demo-request",
        "/_layout/solutions/market-research",
        "/_layout/solutions/price-monitoring",
        "/_layout/solutions/training-ai"
      ]
    },
    "/_layout/compliance": {
      "filePath": "_layout/compliance.tsx",
      "parent": "/_layout"
    },
    "/_layout/cookie": {
      "filePath": "_layout/cookie.tsx",
      "parent": "/_layout"
    },
    "/_layout/privacy": {
      "filePath": "_layout/privacy.tsx",
      "parent": "/_layout"
    },
    "/_layout/privacy-request": {
      "filePath": "_layout/privacy-request.tsx",
      "parent": "/_layout"
    },
    "/_layout/report": {
      "filePath": "_layout/report.tsx",
      "parent": "/_layout"
    },
    "/_layout/terms": {
      "filePath": "_layout/terms.tsx",
      "parent": "/_layout"
    },
    "/_layout/": {
      "filePath": "_layout/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/solutions/demo-request": {
      "filePath": "_layout/solutions/demo-request.tsx",
      "parent": "/_layout"
    },
    "/_layout/solutions/market-research": {
      "filePath": "_layout/solutions/market-research.tsx",
      "parent": "/_layout"
    },
    "/_layout/solutions/price-monitoring": {
      "filePath": "_layout/solutions/price-monitoring.tsx",
      "parent": "/_layout"
    },
    "/_layout/solutions/training-ai": {
      "filePath": "_layout/solutions/training-ai.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
