export interface ApiResponse {
  entries: Entry[];
}

export interface Entry {
  uid: string;
  locale: string;
  _version: number;
  ACL: Acl;
  _in_progress: boolean;
  created_at: string;
  created_by: string;
  footer_links: FooterLink[];
  navigation_links: NavigationLink[];
  social_links: SocialLink[];
  tags: any[];
  title: string;
  updated_at: string;
  updated_by: string;
  publish_details: PublishDetails;
}

export interface Acl {}

export interface FooterLink {
  link: Link;
  _metadata: Metadata;
  attributes: Attributes;
}

export interface Link {
  title: string;
  href: string;
}

export interface Metadata {
  uid: string;
}

export interface Attributes {
  target: string;
  prepend_instance: boolean;
  environments: string[];
}

export interface NavigationLink {
  link: Link2;
  _metadata: Metadata2;
  icon: string;
  attributes: Attributes2;
  child_links: ChildLink[];
}

export interface Link2 {
  title: string;
  href: string;
}

export interface Metadata2 {
  uid: string;
}

export interface Attributes2 {
  target: string;
  prepend_instance: boolean;
  environments: string[];
}

export interface ChildLink {
  link: Link3;
  _metadata: Metadata3;
  attributes: Attributes3;
}

export interface Link3 {
  title: string;
  href: string;
}

export interface Metadata3 {
  uid: string;
}

export interface Attributes3 {
  target: string;
  prepend_instance: boolean;
  environments: string[];
}

export interface SocialLink {
  link: Link4;
  _metadata: Metadata4;
  icon: string;
  attributes: Attributes4;
}

export interface Link4 {
  title: string;
  href: string;
}

export interface Metadata4 {
  uid: string;
}

export interface Attributes4 {
  target: string;
  prepend_instance: boolean;
  environments: string[];
}

export interface PublishDetails {
  time: string;
  user: string;
  environment: string;
  locale: string;
}
