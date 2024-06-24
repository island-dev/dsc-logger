interface Author {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    public_flags: number;
    flags: number;
    banner: string | null;
    accent_color: number | null;
    global_name: string;
    avatar_decoration_data: {
      asset: string;
      sku_id: string;
    } | null;
    banner_color: string | null;
    clan: string | null;
  }
  
  interface Attachment {
    id: string;
    filename: string;
    size: number;
    url: string;
    proxy_url: string;
    height: number | null;
    width: number | null;
    content_type: string | null;
  }
  
  interface Embed {
    title: string;
    description: string;
    url: string;
    timestamp: string;
    color: number;
    footer: {
      text: string;
      icon_url: string;
      proxy_icon_url: string;
    };
    image: {
      url: string;
      proxy_url: string;
      height: number;
      width: number;
    };
    thumbnail: {
      url: string;
      proxy_url: string;
      height: number;
      width: number;
    };
    video: {
      url: string;
      height: number;
      width: number;
    };
    provider: {
      name: string;
      url: string;
    };
    author: {
      name: string;
      url: string;
      icon_url: string;
      proxy_icon_url: string;
    };
    fields: Array<{
      name: string;
      value: string;
      inline: boolean;
    }>;
  }
  
  interface Component {
    type: number;
    components: Array<{
      type: number;
      style: number;
      label: string;
      emoji: {
        name: string;
        id: string;
        animated: boolean;
      };
      custom_id: string;
      url: string;
      disabled: boolean;
    }>;
  }
  
  interface StickerItem {
    id: string;
    name: string;
    format_type: number;
  }
  
export interface Message {
    type: number;
    channel_id: string;
    content: string;
    attachments: Attachment[];
    embeds: Embed[];
    timestamp: string;
    edited_timestamp: string | null;
    flags: number;
    components: Component[];
    id: string;
    author: Author;
    // deno-lint-ignore no-explicit-any
    mentions: any[];
    // deno-lint-ignore no-explicit-any
    mention_roles: any[];
    pinned: boolean;
    mention_everyone: boolean;
    tts: boolean;
    sticker_items: StickerItem[];
  }
  