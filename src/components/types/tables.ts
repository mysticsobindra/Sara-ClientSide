export interface YourReferral {
    points_earned: number;
    referred_user: string;
    referral_date: string;
}

export interface ReferredUserTypes {
    _id: string;
    email: string;
}

export interface ReferralTypes {
    referred_user: ReferredUserTypes | null;
    points_earned: number;
}

export interface TopReferralsTypes {
    referrer_id: string;
    total_points: number;
    referrals: ReferralTypes[];
}

export interface ReferralEarningsTypes  {
    _id: string;
    referrer_id: string;
    referred_id: string;
    earning_type: 'New_Referral' | 'game_played'; 
    points_earned: number;
    created_at: string;
    __v: number;
};