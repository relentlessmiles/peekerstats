export const PLATFORMS: Record<string, { name: string; color: string; short: string }> = {
  emailbison: { name: 'EmailBison', color: '#f97316', short: 'EB' },
  instantly: { name: 'Instantly', color: '#3b82f6', short: 'IN' },
  smartlead: { name: 'Smartlead', color: '#22c55e', short: 'SL' },
  plusvibe: { name: 'Plusvibe', color: '#a855f7', short: 'PV' },
}

export const overviewStats = {
  totalSent: 142830,
  openRate: 34.2,
  replyRate: 8.7,
  bounceRate: 2.1,
  healthyInboxes: 847,
  warningInboxes: 43,
  criticalInboxes: 12,
}

export const platformStats = [
  { platform: 'emailbison', sent: 52400, opens: 18340, replies: 4568, bounces: 892, inboxes: 312, healthScore: 94 },
  { platform: 'instantly', sent: 48200, opens: 17108, replies: 4244, bounces: 1024, inboxes: 284, healthScore: 88 },
  { platform: 'smartlead', sent: 28130, opens: 8991, replies: 2180, bounces: 591, inboxes: 178, healthScore: 91 },
  { platform: 'plusvibe', sent: 14100, opens: 4418, replies: 986, bounces: 421, inboxes: 128, healthScore: 76 },
]

export const campaigns = [
  { id: '1', name: 'SaaS Founders — Q2 Outreach', platform: 'instantly', workspace: 'Acme Agency', sent: 4820, opens: 1736, replies: 421, bounces: 48, openRate: 36.0, replyRate: 8.7, bounceRate: 1.0, status: 'active', healthScore: 96 },
  { id: '2', name: 'E-comm Stores Cold Push', platform: 'emailbison', workspace: 'Boardy', sent: 12400, opens: 3720, replies: 868, bounces: 310, openRate: 30.0, replyRate: 7.0, bounceRate: 2.5, status: 'active', healthScore: 81 },
  { id: '3', name: 'Agency Owners — Service Push', platform: 'smartlead', workspace: 'Acme Agency', sent: 6200, opens: 2418, replies: 558, bounces: 124, openRate: 39.0, replyRate: 9.0, bounceRate: 2.0, status: 'active', healthScore: 89 },
  { id: '4', name: 'Law Firms Q1 Follow-up', platform: 'plusvibe', workspace: 'Borno Capital', sent: 3100, opens: 868, replies: 155, bounces: 218, openRate: 28.0, replyRate: 5.0, bounceRate: 7.0, status: 'paused', healthScore: 42 },
  { id: '5', name: 'Healthcare Decision Makers', platform: 'emailbison', workspace: 'Boardy', sent: 8900, opens: 2847, replies: 712, bounces: 89, openRate: 32.0, replyRate: 8.0, bounceRate: 1.0, status: 'active', healthScore: 95 },
  { id: '6', name: 'VC Firms — Portfolio Intro', platform: 'instantly', workspace: 'Acme Agency', sent: 2200, opens: 924, replies: 242, bounces: 66, openRate: 42.0, replyRate: 11.0, bounceRate: 3.0, status: 'active', healthScore: 87 },
  { id: '7', name: 'Fintech Operators Cold Push', platform: 'smartlead', workspace: 'Momentum Leads', sent: 9100, opens: 2821, replies: 637, bounces: 182, openRate: 31.0, replyRate: 7.0, bounceRate: 2.0, status: 'active', healthScore: 84 },
  { id: '8', name: 'Real Estate Developers', platform: 'plusvibe', workspace: 'Frontier Growth', sent: 4200, opens: 1134, replies: 189, bounces: 336, openRate: 27.0, replyRate: 4.5, bounceRate: 8.0, status: 'warning', healthScore: 38 },
]

export const inboxes = [
  { id: '1', email: 'mike@reach-now.co', platform: 'emailbison', domain: 'reach-now.co', health: 98, sent: 42, status: 'healthy', placement: 'inbox', lastChecked: '2m ago' },
  { id: '2', email: 'sarah@outbound-hq.io', platform: 'instantly', domain: 'outbound-hq.io', health: 94, sent: 38, status: 'healthy', placement: 'inbox', lastChecked: '5m ago' },
  { id: '3', email: 'james@connectpro.ai', platform: 'smartlead', domain: 'connectpro.ai', health: 72, sent: 45, status: 'warning', placement: 'promotions', lastChecked: '3m ago' },
  { id: '4', email: 'lisa@growfast.co', platform: 'emailbison', domain: 'growfast.co', health: 88, sent: 39, status: 'healthy', placement: 'inbox', lastChecked: '1m ago' },
  { id: '5', email: 'tom@salesedge.io', platform: 'plusvibe', domain: 'salesedge.io', health: 22, sent: 44, status: 'critical', placement: 'spam', lastChecked: '4m ago' },
  { id: '6', email: 'anna@leadflow.co', platform: 'instantly', domain: 'leadflow.co', health: 91, sent: 40, status: 'healthy', placement: 'inbox', lastChecked: '2m ago' },
  { id: '7', email: 'mark@pipelinepro.ai', platform: 'emailbison', domain: 'pipelinepro.ai', health: 65, sent: 41, status: 'warning', placement: 'promotions', lastChecked: '6m ago' },
  { id: '8', email: 'kate@boostreach.co', platform: 'smartlead', domain: 'boostreach.co', health: 97, sent: 37, status: 'healthy', placement: 'inbox', lastChecked: '1m ago' },
  { id: '9', email: 'ryan@scalehub.io', platform: 'plusvibe', domain: 'scalehub.io', health: 45, sent: 43, status: 'warning', placement: 'spam', lastChecked: '8m ago' },
  { id: '10', email: 'nina@reachbase.co', platform: 'instantly', domain: 'reachbase.co', health: 99, sent: 36, status: 'healthy', placement: 'inbox', lastChecked: '1m ago' },
]

export const bounceData = {
  total: 2908,
  categories: [
    { name: 'Invalid Address', count: 1745, pct: 60, risk: 'low', color: '#22c55e' },
    { name: 'Mailbox Full', count: 437, pct: 15, risk: 'low', color: '#84cc16' },
    { name: 'Domain Not Found', count: 291, pct: 10, risk: 'medium', color: '#eab308' },
    { name: 'Reputation Block', count: 291, pct: 10, risk: 'critical', color: '#ef4444' },
    { name: 'Other', count: 145, pct: 5, risk: 'medium', color: '#71717a' },
  ],
  byPlatform: [
    { platform: 'emailbison', invalid: 535, full: 178, domain: 107, reputation: 71 },
    { platform: 'instantly', invalid: 614, full: 153, domain: 154, reputation: 103 },
    { platform: 'smartlead', invalid: 355, full: 71, domain: 89, reputation: 76 },
    { platform: 'plusvibe', invalid: 241, full: 35, domain: 36, reputation: 109 },
  ],
  weeklyTrend: [
    { week: 'May 12', total: 420, reputation: 38 },
    { week: 'May 19', total: 398, reputation: 29 },
    { week: 'May 26', total: 512, reputation: 67 },
    { week: 'Jun 2', total: 445, reputation: 41 },
    { week: 'Jun 9', total: 388, reputation: 24 },
    { week: 'Jun 16', total: 421, reputation: 52 },
    { week: 'Jun 23', total: 324, reputation: 40 },
  ],
  reputationBlocks: [
    { domain: 'salesedge.io', platform: 'plusvibe', blocked: '2h ago', affectedInboxes: 4, campaign: 'Real Estate Developers' },
    { domain: 'scalehub.io', platform: 'plusvibe', blocked: '6h ago', affectedInboxes: 2, campaign: 'Law Firms Q1 Follow-up' },
    { domain: 'pipelinepro.ai', platform: 'emailbison', blocked: '1d ago', affectedInboxes: 3, campaign: 'E-comm Stores Cold Push' },
  ],
}

export const workspaces = [
  { id: '1', name: 'Acme Agency', clients: 8, inboxes: 240, platforms: ['instantly', 'smartlead', 'emailbison'], healthScore: 91, status: 'healthy' },
  { id: '2', name: 'Boardy', clients: 1, inboxes: 180, platforms: ['emailbison'], healthScore: 87, status: 'healthy' },
  { id: '3', name: 'Borno Capital', clients: 1, inboxes: 95, platforms: ['plusvibe', 'instantly'], healthScore: 64, status: 'warning' },
  { id: '4', name: 'Momentum Leads', clients: 4, inboxes: 160, platforms: ['instantly', 'smartlead'], healthScore: 93, status: 'healthy' },
  { id: '5', name: 'Frontier Growth', clients: 2, inboxes: 127, platforms: ['emailbison', 'plusvibe'], healthScore: 78, status: 'warning' },
]

export const weeklyTrend = [
  { week: 'May 12', sent: 18400, opens: 6256, replies: 1472 },
  { week: 'May 19', sent: 19800, opens: 7128, replies: 1683 },
  { week: 'May 26', sent: 22100, opens: 7514, replies: 1926 },
  { week: 'Jun 2', sent: 20400, opens: 6936, replies: 1734 },
  { week: 'Jun 9', sent: 23800, opens: 8568, replies: 2142 },
  { week: 'Jun 16', sent: 21200, opens: 7632, replies: 1802 },
  { week: 'Jun 23', sent: 17130, opens: 6173, replies: 1420 },
]
