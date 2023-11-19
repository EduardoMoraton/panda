type Appliance = {
  applianceId: string;
  appliance: string;
  size: "small" | "medium" | "big";
  consumption_kwh: number;
};

type LogEntry = {
  createdAt: Date;
  applianceId: string;
  durationSeconds: number;
};

type User = {
  email: string;
  appliances: Appliance[];
  log: LogEntry[];
  joinedAt: Date;
  lastReportDate: Date | null;
  reportFrequency: "weekly" | "monthly";
};

type UserSession = {
  sessionClaims: {
    azp: string;
    email: string;
    exp: number;
    iat: number;
    iss: string;
    jti: string;
    nbf: number;
    sid: string;
    sub: string;
  };
};

export type Query = {
  _id: string
  email: string
  appliances: Array<{
    appliance: string
    consumption_kwh: number
    size: string
    applianceId: string
  }>
  log: Array<any>
  joinedAt: string
  lastReportDate: any
  reportFrequency: string
}

export { Appliance, LogEntry, User, UserSession, Query };
