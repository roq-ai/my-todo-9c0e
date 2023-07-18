interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Individual User'],
  tenantRoles: ['Team Member'],
  tenantName: 'Organization',
  applicationName: 'my todo',
  addOns: ['chat'],
};
