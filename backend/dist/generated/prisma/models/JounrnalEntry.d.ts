import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model JounrnalEntry
 *
 */
export type JounrnalEntryModel = runtime.Types.Result.DefaultSelection<Prisma.$JounrnalEntryPayload>;
export type AggregateJounrnalEntry = {
    _count: JounrnalEntryCountAggregateOutputType | null;
    _min: JounrnalEntryMinAggregateOutputType | null;
    _max: JounrnalEntryMaxAggregateOutputType | null;
};
export type JounrnalEntryMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    ambience: string | null;
    text: string | null;
    emotion: string | null;
    summary: string | null;
    createdAt: Date | null;
};
export type JounrnalEntryMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    ambience: string | null;
    text: string | null;
    emotion: string | null;
    summary: string | null;
    createdAt: Date | null;
};
export type JounrnalEntryCountAggregateOutputType = {
    id: number;
    userId: number;
    ambience: number;
    text: number;
    emotion: number;
    keywords: number;
    summary: number;
    createdAt: number;
    _all: number;
};
export type JounrnalEntryMinAggregateInputType = {
    id?: true;
    userId?: true;
    ambience?: true;
    text?: true;
    emotion?: true;
    summary?: true;
    createdAt?: true;
};
export type JounrnalEntryMaxAggregateInputType = {
    id?: true;
    userId?: true;
    ambience?: true;
    text?: true;
    emotion?: true;
    summary?: true;
    createdAt?: true;
};
export type JounrnalEntryCountAggregateInputType = {
    id?: true;
    userId?: true;
    ambience?: true;
    text?: true;
    emotion?: true;
    keywords?: true;
    summary?: true;
    createdAt?: true;
    _all?: true;
};
export type JounrnalEntryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which JounrnalEntry to aggregate.
     */
    where?: Prisma.JounrnalEntryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JounrnalEntries to fetch.
     */
    orderBy?: Prisma.JounrnalEntryOrderByWithRelationInput | Prisma.JounrnalEntryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.JounrnalEntryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JounrnalEntries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JounrnalEntries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned JounrnalEntries
    **/
    _count?: true | JounrnalEntryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: JounrnalEntryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: JounrnalEntryMaxAggregateInputType;
};
export type GetJounrnalEntryAggregateType<T extends JounrnalEntryAggregateArgs> = {
    [P in keyof T & keyof AggregateJounrnalEntry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateJounrnalEntry[P]> : Prisma.GetScalarType<T[P], AggregateJounrnalEntry[P]>;
};
export type JounrnalEntryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JounrnalEntryWhereInput;
    orderBy?: Prisma.JounrnalEntryOrderByWithAggregationInput | Prisma.JounrnalEntryOrderByWithAggregationInput[];
    by: Prisma.JounrnalEntryScalarFieldEnum[] | Prisma.JounrnalEntryScalarFieldEnum;
    having?: Prisma.JounrnalEntryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JounrnalEntryCountAggregateInputType | true;
    _min?: JounrnalEntryMinAggregateInputType;
    _max?: JounrnalEntryMaxAggregateInputType;
};
export type JounrnalEntryGroupByOutputType = {
    id: string;
    userId: string;
    ambience: string | null;
    text: string;
    emotion: string | null;
    keywords: string[];
    summary: string | null;
    createdAt: Date;
    _count: JounrnalEntryCountAggregateOutputType | null;
    _min: JounrnalEntryMinAggregateOutputType | null;
    _max: JounrnalEntryMaxAggregateOutputType | null;
};
type GetJounrnalEntryGroupByPayload<T extends JounrnalEntryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<JounrnalEntryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof JounrnalEntryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], JounrnalEntryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], JounrnalEntryGroupByOutputType[P]>;
}>>;
export type JounrnalEntryWhereInput = {
    AND?: Prisma.JounrnalEntryWhereInput | Prisma.JounrnalEntryWhereInput[];
    OR?: Prisma.JounrnalEntryWhereInput[];
    NOT?: Prisma.JounrnalEntryWhereInput | Prisma.JounrnalEntryWhereInput[];
    id?: Prisma.StringFilter<"JounrnalEntry"> | string;
    userId?: Prisma.StringFilter<"JounrnalEntry"> | string;
    ambience?: Prisma.StringNullableFilter<"JounrnalEntry"> | string | null;
    text?: Prisma.StringFilter<"JounrnalEntry"> | string;
    emotion?: Prisma.StringNullableFilter<"JounrnalEntry"> | string | null;
    keywords?: Prisma.StringNullableListFilter<"JounrnalEntry">;
    summary?: Prisma.StringNullableFilter<"JounrnalEntry"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"JounrnalEntry"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type JounrnalEntryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    ambience?: Prisma.SortOrderInput | Prisma.SortOrder;
    text?: Prisma.SortOrder;
    emotion?: Prisma.SortOrderInput | Prisma.SortOrder;
    keywords?: Prisma.SortOrder;
    summary?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type JounrnalEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.JounrnalEntryWhereInput | Prisma.JounrnalEntryWhereInput[];
    OR?: Prisma.JounrnalEntryWhereInput[];
    NOT?: Prisma.JounrnalEntryWhereInput | Prisma.JounrnalEntryWhereInput[];
    userId?: Prisma.StringFilter<"JounrnalEntry"> | string;
    ambience?: Prisma.StringNullableFilter<"JounrnalEntry"> | string | null;
    text?: Prisma.StringFilter<"JounrnalEntry"> | string;
    emotion?: Prisma.StringNullableFilter<"JounrnalEntry"> | string | null;
    keywords?: Prisma.StringNullableListFilter<"JounrnalEntry">;
    summary?: Prisma.StringNullableFilter<"JounrnalEntry"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"JounrnalEntry"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type JounrnalEntryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    ambience?: Prisma.SortOrderInput | Prisma.SortOrder;
    text?: Prisma.SortOrder;
    emotion?: Prisma.SortOrderInput | Prisma.SortOrder;
    keywords?: Prisma.SortOrder;
    summary?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.JounrnalEntryCountOrderByAggregateInput;
    _max?: Prisma.JounrnalEntryMaxOrderByAggregateInput;
    _min?: Prisma.JounrnalEntryMinOrderByAggregateInput;
};
export type JounrnalEntryScalarWhereWithAggregatesInput = {
    AND?: Prisma.JounrnalEntryScalarWhereWithAggregatesInput | Prisma.JounrnalEntryScalarWhereWithAggregatesInput[];
    OR?: Prisma.JounrnalEntryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.JounrnalEntryScalarWhereWithAggregatesInput | Prisma.JounrnalEntryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"JounrnalEntry"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"JounrnalEntry"> | string;
    ambience?: Prisma.StringNullableWithAggregatesFilter<"JounrnalEntry"> | string | null;
    text?: Prisma.StringWithAggregatesFilter<"JounrnalEntry"> | string;
    emotion?: Prisma.StringNullableWithAggregatesFilter<"JounrnalEntry"> | string | null;
    keywords?: Prisma.StringNullableListFilter<"JounrnalEntry">;
    summary?: Prisma.StringNullableWithAggregatesFilter<"JounrnalEntry"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"JounrnalEntry"> | Date | string;
};
export type JounrnalEntryCreateInput = {
    id?: string;
    ambience?: string | null;
    text: string;
    emotion?: string | null;
    keywords?: Prisma.JounrnalEntryCreatekeywordsInput | string[];
    summary?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutJournalsInput;
};
export type JounrnalEntryUncheckedCreateInput = {
    id?: string;
    userId: string;
    ambience?: string | null;
    text: string;
    emotion?: string | null;
    keywords?: Prisma.JounrnalEntryCreatekeywordsInput | string[];
    summary?: string | null;
    createdAt?: Date | string;
};
export type JounrnalEntryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ambience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    emotion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keywords?: Prisma.JounrnalEntryUpdatekeywordsInput | string[];
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutJournalsNestedInput;
};
export type JounrnalEntryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    ambience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    emotion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keywords?: Prisma.JounrnalEntryUpdatekeywordsInput | string[];
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JounrnalEntryCreateManyInput = {
    id?: string;
    userId: string;
    ambience?: string | null;
    text: string;
    emotion?: string | null;
    keywords?: Prisma.JounrnalEntryCreatekeywordsInput | string[];
    summary?: string | null;
    createdAt?: Date | string;
};
export type JounrnalEntryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ambience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    emotion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keywords?: Prisma.JounrnalEntryUpdatekeywordsInput | string[];
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JounrnalEntryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    ambience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    emotion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keywords?: Prisma.JounrnalEntryUpdatekeywordsInput | string[];
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JounrnalEntryListRelationFilter = {
    every?: Prisma.JounrnalEntryWhereInput;
    some?: Prisma.JounrnalEntryWhereInput;
    none?: Prisma.JounrnalEntryWhereInput;
};
export type JounrnalEntryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type JounrnalEntryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    ambience?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    emotion?: Prisma.SortOrder;
    keywords?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type JounrnalEntryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    ambience?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    emotion?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type JounrnalEntryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    ambience?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    emotion?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type JounrnalEntryCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.JounrnalEntryCreateWithoutUserInput, Prisma.JounrnalEntryUncheckedCreateWithoutUserInput> | Prisma.JounrnalEntryCreateWithoutUserInput[] | Prisma.JounrnalEntryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.JounrnalEntryCreateOrConnectWithoutUserInput | Prisma.JounrnalEntryCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.JounrnalEntryCreateManyUserInputEnvelope;
    connect?: Prisma.JounrnalEntryWhereUniqueInput | Prisma.JounrnalEntryWhereUniqueInput[];
};
export type JounrnalEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.JounrnalEntryCreateWithoutUserInput, Prisma.JounrnalEntryUncheckedCreateWithoutUserInput> | Prisma.JounrnalEntryCreateWithoutUserInput[] | Prisma.JounrnalEntryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.JounrnalEntryCreateOrConnectWithoutUserInput | Prisma.JounrnalEntryCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.JounrnalEntryCreateManyUserInputEnvelope;
    connect?: Prisma.JounrnalEntryWhereUniqueInput | Prisma.JounrnalEntryWhereUniqueInput[];
};
export type JounrnalEntryUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.JounrnalEntryCreateWithoutUserInput, Prisma.JounrnalEntryUncheckedCreateWithoutUserInput> | Prisma.JounrnalEntryCreateWithoutUserInput[] | Prisma.JounrnalEntryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.JounrnalEntryCreateOrConnectWithoutUserInput | Prisma.JounrnalEntryCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.JounrnalEntryUpsertWithWhereUniqueWithoutUserInput | Prisma.JounrnalEntryUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.JounrnalEntryCreateManyUserInputEnvelope;
    set?: Prisma.JounrnalEntryWhereUniqueInput | Prisma.JounrnalEntryWhereUniqueInput[];
    disconnect?: Prisma.JounrnalEntryWhereUniqueInput | Prisma.JounrnalEntryWhereUniqueInput[];
    delete?: Prisma.JounrnalEntryWhereUniqueInput | Prisma.JounrnalEntryWhereUniqueInput[];
    connect?: Prisma.JounrnalEntryWhereUniqueInput | Prisma.JounrnalEntryWhereUniqueInput[];
    update?: Prisma.JounrnalEntryUpdateWithWhereUniqueWithoutUserInput | Prisma.JounrnalEntryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.JounrnalEntryUpdateManyWithWhereWithoutUserInput | Prisma.JounrnalEntryUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.JounrnalEntryScalarWhereInput | Prisma.JounrnalEntryScalarWhereInput[];
};
export type JounrnalEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.JounrnalEntryCreateWithoutUserInput, Prisma.JounrnalEntryUncheckedCreateWithoutUserInput> | Prisma.JounrnalEntryCreateWithoutUserInput[] | Prisma.JounrnalEntryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.JounrnalEntryCreateOrConnectWithoutUserInput | Prisma.JounrnalEntryCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.JounrnalEntryUpsertWithWhereUniqueWithoutUserInput | Prisma.JounrnalEntryUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.JounrnalEntryCreateManyUserInputEnvelope;
    set?: Prisma.JounrnalEntryWhereUniqueInput | Prisma.JounrnalEntryWhereUniqueInput[];
    disconnect?: Prisma.JounrnalEntryWhereUniqueInput | Prisma.JounrnalEntryWhereUniqueInput[];
    delete?: Prisma.JounrnalEntryWhereUniqueInput | Prisma.JounrnalEntryWhereUniqueInput[];
    connect?: Prisma.JounrnalEntryWhereUniqueInput | Prisma.JounrnalEntryWhereUniqueInput[];
    update?: Prisma.JounrnalEntryUpdateWithWhereUniqueWithoutUserInput | Prisma.JounrnalEntryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.JounrnalEntryUpdateManyWithWhereWithoutUserInput | Prisma.JounrnalEntryUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.JounrnalEntryScalarWhereInput | Prisma.JounrnalEntryScalarWhereInput[];
};
export type JounrnalEntryCreatekeywordsInput = {
    set: string[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type JounrnalEntryUpdatekeywordsInput = {
    set?: string[];
    push?: string | string[];
};
export type JounrnalEntryCreateWithoutUserInput = {
    id?: string;
    ambience?: string | null;
    text: string;
    emotion?: string | null;
    keywords?: Prisma.JounrnalEntryCreatekeywordsInput | string[];
    summary?: string | null;
    createdAt?: Date | string;
};
export type JounrnalEntryUncheckedCreateWithoutUserInput = {
    id?: string;
    ambience?: string | null;
    text: string;
    emotion?: string | null;
    keywords?: Prisma.JounrnalEntryCreatekeywordsInput | string[];
    summary?: string | null;
    createdAt?: Date | string;
};
export type JounrnalEntryCreateOrConnectWithoutUserInput = {
    where: Prisma.JounrnalEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.JounrnalEntryCreateWithoutUserInput, Prisma.JounrnalEntryUncheckedCreateWithoutUserInput>;
};
export type JounrnalEntryCreateManyUserInputEnvelope = {
    data: Prisma.JounrnalEntryCreateManyUserInput | Prisma.JounrnalEntryCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type JounrnalEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.JounrnalEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.JounrnalEntryUpdateWithoutUserInput, Prisma.JounrnalEntryUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.JounrnalEntryCreateWithoutUserInput, Prisma.JounrnalEntryUncheckedCreateWithoutUserInput>;
};
export type JounrnalEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.JounrnalEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.JounrnalEntryUpdateWithoutUserInput, Prisma.JounrnalEntryUncheckedUpdateWithoutUserInput>;
};
export type JounrnalEntryUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.JounrnalEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.JounrnalEntryUpdateManyMutationInput, Prisma.JounrnalEntryUncheckedUpdateManyWithoutUserInput>;
};
export type JounrnalEntryScalarWhereInput = {
    AND?: Prisma.JounrnalEntryScalarWhereInput | Prisma.JounrnalEntryScalarWhereInput[];
    OR?: Prisma.JounrnalEntryScalarWhereInput[];
    NOT?: Prisma.JounrnalEntryScalarWhereInput | Prisma.JounrnalEntryScalarWhereInput[];
    id?: Prisma.StringFilter<"JounrnalEntry"> | string;
    userId?: Prisma.StringFilter<"JounrnalEntry"> | string;
    ambience?: Prisma.StringNullableFilter<"JounrnalEntry"> | string | null;
    text?: Prisma.StringFilter<"JounrnalEntry"> | string;
    emotion?: Prisma.StringNullableFilter<"JounrnalEntry"> | string | null;
    keywords?: Prisma.StringNullableListFilter<"JounrnalEntry">;
    summary?: Prisma.StringNullableFilter<"JounrnalEntry"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"JounrnalEntry"> | Date | string;
};
export type JounrnalEntryCreateManyUserInput = {
    id?: string;
    ambience?: string | null;
    text: string;
    emotion?: string | null;
    keywords?: Prisma.JounrnalEntryCreatekeywordsInput | string[];
    summary?: string | null;
    createdAt?: Date | string;
};
export type JounrnalEntryUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ambience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    emotion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keywords?: Prisma.JounrnalEntryUpdatekeywordsInput | string[];
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JounrnalEntryUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ambience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    emotion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keywords?: Prisma.JounrnalEntryUpdatekeywordsInput | string[];
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JounrnalEntryUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ambience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    emotion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keywords?: Prisma.JounrnalEntryUpdatekeywordsInput | string[];
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JounrnalEntrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    ambience?: boolean;
    text?: boolean;
    emotion?: boolean;
    keywords?: boolean;
    summary?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["jounrnalEntry"]>;
export type JounrnalEntrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    ambience?: boolean;
    text?: boolean;
    emotion?: boolean;
    keywords?: boolean;
    summary?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["jounrnalEntry"]>;
export type JounrnalEntrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    ambience?: boolean;
    text?: boolean;
    emotion?: boolean;
    keywords?: boolean;
    summary?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["jounrnalEntry"]>;
export type JounrnalEntrySelectScalar = {
    id?: boolean;
    userId?: boolean;
    ambience?: boolean;
    text?: boolean;
    emotion?: boolean;
    keywords?: boolean;
    summary?: boolean;
    createdAt?: boolean;
};
export type JounrnalEntryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "ambience" | "text" | "emotion" | "keywords" | "summary" | "createdAt", ExtArgs["result"]["jounrnalEntry"]>;
export type JounrnalEntryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type JounrnalEntryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type JounrnalEntryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $JounrnalEntryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "JounrnalEntry";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        ambience: string | null;
        text: string;
        emotion: string | null;
        keywords: string[];
        summary: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["jounrnalEntry"]>;
    composites: {};
};
export type JounrnalEntryGetPayload<S extends boolean | null | undefined | JounrnalEntryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$JounrnalEntryPayload, S>;
export type JounrnalEntryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<JounrnalEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: JounrnalEntryCountAggregateInputType | true;
};
export interface JounrnalEntryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['JounrnalEntry'];
        meta: {
            name: 'JounrnalEntry';
        };
    };
    /**
     * Find zero or one JounrnalEntry that matches the filter.
     * @param {JounrnalEntryFindUniqueArgs} args - Arguments to find a JounrnalEntry
     * @example
     * // Get one JounrnalEntry
     * const jounrnalEntry = await prisma.jounrnalEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JounrnalEntryFindUniqueArgs>(args: Prisma.SelectSubset<T, JounrnalEntryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__JounrnalEntryClient<runtime.Types.Result.GetResult<Prisma.$JounrnalEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one JounrnalEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JounrnalEntryFindUniqueOrThrowArgs} args - Arguments to find a JounrnalEntry
     * @example
     * // Get one JounrnalEntry
     * const jounrnalEntry = await prisma.jounrnalEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JounrnalEntryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, JounrnalEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__JounrnalEntryClient<runtime.Types.Result.GetResult<Prisma.$JounrnalEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first JounrnalEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JounrnalEntryFindFirstArgs} args - Arguments to find a JounrnalEntry
     * @example
     * // Get one JounrnalEntry
     * const jounrnalEntry = await prisma.jounrnalEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JounrnalEntryFindFirstArgs>(args?: Prisma.SelectSubset<T, JounrnalEntryFindFirstArgs<ExtArgs>>): Prisma.Prisma__JounrnalEntryClient<runtime.Types.Result.GetResult<Prisma.$JounrnalEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first JounrnalEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JounrnalEntryFindFirstOrThrowArgs} args - Arguments to find a JounrnalEntry
     * @example
     * // Get one JounrnalEntry
     * const jounrnalEntry = await prisma.jounrnalEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JounrnalEntryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, JounrnalEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__JounrnalEntryClient<runtime.Types.Result.GetResult<Prisma.$JounrnalEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more JounrnalEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JounrnalEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JounrnalEntries
     * const jounrnalEntries = await prisma.jounrnalEntry.findMany()
     *
     * // Get first 10 JounrnalEntries
     * const jounrnalEntries = await prisma.jounrnalEntry.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const jounrnalEntryWithIdOnly = await prisma.jounrnalEntry.findMany({ select: { id: true } })
     *
     */
    findMany<T extends JounrnalEntryFindManyArgs>(args?: Prisma.SelectSubset<T, JounrnalEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JounrnalEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a JounrnalEntry.
     * @param {JounrnalEntryCreateArgs} args - Arguments to create a JounrnalEntry.
     * @example
     * // Create one JounrnalEntry
     * const JounrnalEntry = await prisma.jounrnalEntry.create({
     *   data: {
     *     // ... data to create a JounrnalEntry
     *   }
     * })
     *
     */
    create<T extends JounrnalEntryCreateArgs>(args: Prisma.SelectSubset<T, JounrnalEntryCreateArgs<ExtArgs>>): Prisma.Prisma__JounrnalEntryClient<runtime.Types.Result.GetResult<Prisma.$JounrnalEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many JounrnalEntries.
     * @param {JounrnalEntryCreateManyArgs} args - Arguments to create many JounrnalEntries.
     * @example
     * // Create many JounrnalEntries
     * const jounrnalEntry = await prisma.jounrnalEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends JounrnalEntryCreateManyArgs>(args?: Prisma.SelectSubset<T, JounrnalEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many JounrnalEntries and returns the data saved in the database.
     * @param {JounrnalEntryCreateManyAndReturnArgs} args - Arguments to create many JounrnalEntries.
     * @example
     * // Create many JounrnalEntries
     * const jounrnalEntry = await prisma.jounrnalEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many JounrnalEntries and only return the `id`
     * const jounrnalEntryWithIdOnly = await prisma.jounrnalEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends JounrnalEntryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, JounrnalEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JounrnalEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a JounrnalEntry.
     * @param {JounrnalEntryDeleteArgs} args - Arguments to delete one JounrnalEntry.
     * @example
     * // Delete one JounrnalEntry
     * const JounrnalEntry = await prisma.jounrnalEntry.delete({
     *   where: {
     *     // ... filter to delete one JounrnalEntry
     *   }
     * })
     *
     */
    delete<T extends JounrnalEntryDeleteArgs>(args: Prisma.SelectSubset<T, JounrnalEntryDeleteArgs<ExtArgs>>): Prisma.Prisma__JounrnalEntryClient<runtime.Types.Result.GetResult<Prisma.$JounrnalEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one JounrnalEntry.
     * @param {JounrnalEntryUpdateArgs} args - Arguments to update one JounrnalEntry.
     * @example
     * // Update one JounrnalEntry
     * const jounrnalEntry = await prisma.jounrnalEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends JounrnalEntryUpdateArgs>(args: Prisma.SelectSubset<T, JounrnalEntryUpdateArgs<ExtArgs>>): Prisma.Prisma__JounrnalEntryClient<runtime.Types.Result.GetResult<Prisma.$JounrnalEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more JounrnalEntries.
     * @param {JounrnalEntryDeleteManyArgs} args - Arguments to filter JounrnalEntries to delete.
     * @example
     * // Delete a few JounrnalEntries
     * const { count } = await prisma.jounrnalEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends JounrnalEntryDeleteManyArgs>(args?: Prisma.SelectSubset<T, JounrnalEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more JounrnalEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JounrnalEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JounrnalEntries
     * const jounrnalEntry = await prisma.jounrnalEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends JounrnalEntryUpdateManyArgs>(args: Prisma.SelectSubset<T, JounrnalEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more JounrnalEntries and returns the data updated in the database.
     * @param {JounrnalEntryUpdateManyAndReturnArgs} args - Arguments to update many JounrnalEntries.
     * @example
     * // Update many JounrnalEntries
     * const jounrnalEntry = await prisma.jounrnalEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more JounrnalEntries and only return the `id`
     * const jounrnalEntryWithIdOnly = await prisma.jounrnalEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends JounrnalEntryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, JounrnalEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JounrnalEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one JounrnalEntry.
     * @param {JounrnalEntryUpsertArgs} args - Arguments to update or create a JounrnalEntry.
     * @example
     * // Update or create a JounrnalEntry
     * const jounrnalEntry = await prisma.jounrnalEntry.upsert({
     *   create: {
     *     // ... data to create a JounrnalEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JounrnalEntry we want to update
     *   }
     * })
     */
    upsert<T extends JounrnalEntryUpsertArgs>(args: Prisma.SelectSubset<T, JounrnalEntryUpsertArgs<ExtArgs>>): Prisma.Prisma__JounrnalEntryClient<runtime.Types.Result.GetResult<Prisma.$JounrnalEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of JounrnalEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JounrnalEntryCountArgs} args - Arguments to filter JounrnalEntries to count.
     * @example
     * // Count the number of JounrnalEntries
     * const count = await prisma.jounrnalEntry.count({
     *   where: {
     *     // ... the filter for the JounrnalEntries we want to count
     *   }
     * })
    **/
    count<T extends JounrnalEntryCountArgs>(args?: Prisma.Subset<T, JounrnalEntryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], JounrnalEntryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a JounrnalEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JounrnalEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JounrnalEntryAggregateArgs>(args: Prisma.Subset<T, JounrnalEntryAggregateArgs>): Prisma.PrismaPromise<GetJounrnalEntryAggregateType<T>>;
    /**
     * Group by JounrnalEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JounrnalEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends JounrnalEntryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: JounrnalEntryGroupByArgs['orderBy'];
    } : {
        orderBy?: JounrnalEntryGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, JounrnalEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJounrnalEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the JounrnalEntry model
     */
    readonly fields: JounrnalEntryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for JounrnalEntry.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__JounrnalEntryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the JounrnalEntry model
 */
export interface JounrnalEntryFieldRefs {
    readonly id: Prisma.FieldRef<"JounrnalEntry", 'String'>;
    readonly userId: Prisma.FieldRef<"JounrnalEntry", 'String'>;
    readonly ambience: Prisma.FieldRef<"JounrnalEntry", 'String'>;
    readonly text: Prisma.FieldRef<"JounrnalEntry", 'String'>;
    readonly emotion: Prisma.FieldRef<"JounrnalEntry", 'String'>;
    readonly keywords: Prisma.FieldRef<"JounrnalEntry", 'String[]'>;
    readonly summary: Prisma.FieldRef<"JounrnalEntry", 'String'>;
    readonly createdAt: Prisma.FieldRef<"JounrnalEntry", 'DateTime'>;
}
/**
 * JounrnalEntry findUnique
 */
export type JounrnalEntryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JounrnalEntry
     */
    select?: Prisma.JounrnalEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JounrnalEntry
     */
    omit?: Prisma.JounrnalEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JounrnalEntryInclude<ExtArgs> | null;
    /**
     * Filter, which JounrnalEntry to fetch.
     */
    where: Prisma.JounrnalEntryWhereUniqueInput;
};
/**
 * JounrnalEntry findUniqueOrThrow
 */
export type JounrnalEntryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JounrnalEntry
     */
    select?: Prisma.JounrnalEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JounrnalEntry
     */
    omit?: Prisma.JounrnalEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JounrnalEntryInclude<ExtArgs> | null;
    /**
     * Filter, which JounrnalEntry to fetch.
     */
    where: Prisma.JounrnalEntryWhereUniqueInput;
};
/**
 * JounrnalEntry findFirst
 */
export type JounrnalEntryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JounrnalEntry
     */
    select?: Prisma.JounrnalEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JounrnalEntry
     */
    omit?: Prisma.JounrnalEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JounrnalEntryInclude<ExtArgs> | null;
    /**
     * Filter, which JounrnalEntry to fetch.
     */
    where?: Prisma.JounrnalEntryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JounrnalEntries to fetch.
     */
    orderBy?: Prisma.JounrnalEntryOrderByWithRelationInput | Prisma.JounrnalEntryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JounrnalEntries.
     */
    cursor?: Prisma.JounrnalEntryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JounrnalEntries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JounrnalEntries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JounrnalEntries.
     */
    distinct?: Prisma.JounrnalEntryScalarFieldEnum | Prisma.JounrnalEntryScalarFieldEnum[];
};
/**
 * JounrnalEntry findFirstOrThrow
 */
export type JounrnalEntryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JounrnalEntry
     */
    select?: Prisma.JounrnalEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JounrnalEntry
     */
    omit?: Prisma.JounrnalEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JounrnalEntryInclude<ExtArgs> | null;
    /**
     * Filter, which JounrnalEntry to fetch.
     */
    where?: Prisma.JounrnalEntryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JounrnalEntries to fetch.
     */
    orderBy?: Prisma.JounrnalEntryOrderByWithRelationInput | Prisma.JounrnalEntryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JounrnalEntries.
     */
    cursor?: Prisma.JounrnalEntryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JounrnalEntries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JounrnalEntries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JounrnalEntries.
     */
    distinct?: Prisma.JounrnalEntryScalarFieldEnum | Prisma.JounrnalEntryScalarFieldEnum[];
};
/**
 * JounrnalEntry findMany
 */
export type JounrnalEntryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JounrnalEntry
     */
    select?: Prisma.JounrnalEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JounrnalEntry
     */
    omit?: Prisma.JounrnalEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JounrnalEntryInclude<ExtArgs> | null;
    /**
     * Filter, which JounrnalEntries to fetch.
     */
    where?: Prisma.JounrnalEntryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JounrnalEntries to fetch.
     */
    orderBy?: Prisma.JounrnalEntryOrderByWithRelationInput | Prisma.JounrnalEntryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing JounrnalEntries.
     */
    cursor?: Prisma.JounrnalEntryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JounrnalEntries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JounrnalEntries.
     */
    skip?: number;
    distinct?: Prisma.JounrnalEntryScalarFieldEnum | Prisma.JounrnalEntryScalarFieldEnum[];
};
/**
 * JounrnalEntry create
 */
export type JounrnalEntryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JounrnalEntry
     */
    select?: Prisma.JounrnalEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JounrnalEntry
     */
    omit?: Prisma.JounrnalEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JounrnalEntryInclude<ExtArgs> | null;
    /**
     * The data needed to create a JounrnalEntry.
     */
    data: Prisma.XOR<Prisma.JounrnalEntryCreateInput, Prisma.JounrnalEntryUncheckedCreateInput>;
};
/**
 * JounrnalEntry createMany
 */
export type JounrnalEntryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many JounrnalEntries.
     */
    data: Prisma.JounrnalEntryCreateManyInput | Prisma.JounrnalEntryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * JounrnalEntry createManyAndReturn
 */
export type JounrnalEntryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JounrnalEntry
     */
    select?: Prisma.JounrnalEntrySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the JounrnalEntry
     */
    omit?: Prisma.JounrnalEntryOmit<ExtArgs> | null;
    /**
     * The data used to create many JounrnalEntries.
     */
    data: Prisma.JounrnalEntryCreateManyInput | Prisma.JounrnalEntryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JounrnalEntryIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * JounrnalEntry update
 */
export type JounrnalEntryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JounrnalEntry
     */
    select?: Prisma.JounrnalEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JounrnalEntry
     */
    omit?: Prisma.JounrnalEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JounrnalEntryInclude<ExtArgs> | null;
    /**
     * The data needed to update a JounrnalEntry.
     */
    data: Prisma.XOR<Prisma.JounrnalEntryUpdateInput, Prisma.JounrnalEntryUncheckedUpdateInput>;
    /**
     * Choose, which JounrnalEntry to update.
     */
    where: Prisma.JounrnalEntryWhereUniqueInput;
};
/**
 * JounrnalEntry updateMany
 */
export type JounrnalEntryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update JounrnalEntries.
     */
    data: Prisma.XOR<Prisma.JounrnalEntryUpdateManyMutationInput, Prisma.JounrnalEntryUncheckedUpdateManyInput>;
    /**
     * Filter which JounrnalEntries to update
     */
    where?: Prisma.JounrnalEntryWhereInput;
    /**
     * Limit how many JounrnalEntries to update.
     */
    limit?: number;
};
/**
 * JounrnalEntry updateManyAndReturn
 */
export type JounrnalEntryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JounrnalEntry
     */
    select?: Prisma.JounrnalEntrySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the JounrnalEntry
     */
    omit?: Prisma.JounrnalEntryOmit<ExtArgs> | null;
    /**
     * The data used to update JounrnalEntries.
     */
    data: Prisma.XOR<Prisma.JounrnalEntryUpdateManyMutationInput, Prisma.JounrnalEntryUncheckedUpdateManyInput>;
    /**
     * Filter which JounrnalEntries to update
     */
    where?: Prisma.JounrnalEntryWhereInput;
    /**
     * Limit how many JounrnalEntries to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JounrnalEntryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * JounrnalEntry upsert
 */
export type JounrnalEntryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JounrnalEntry
     */
    select?: Prisma.JounrnalEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JounrnalEntry
     */
    omit?: Prisma.JounrnalEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JounrnalEntryInclude<ExtArgs> | null;
    /**
     * The filter to search for the JounrnalEntry to update in case it exists.
     */
    where: Prisma.JounrnalEntryWhereUniqueInput;
    /**
     * In case the JounrnalEntry found by the `where` argument doesn't exist, create a new JounrnalEntry with this data.
     */
    create: Prisma.XOR<Prisma.JounrnalEntryCreateInput, Prisma.JounrnalEntryUncheckedCreateInput>;
    /**
     * In case the JounrnalEntry was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.JounrnalEntryUpdateInput, Prisma.JounrnalEntryUncheckedUpdateInput>;
};
/**
 * JounrnalEntry delete
 */
export type JounrnalEntryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JounrnalEntry
     */
    select?: Prisma.JounrnalEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JounrnalEntry
     */
    omit?: Prisma.JounrnalEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JounrnalEntryInclude<ExtArgs> | null;
    /**
     * Filter which JounrnalEntry to delete.
     */
    where: Prisma.JounrnalEntryWhereUniqueInput;
};
/**
 * JounrnalEntry deleteMany
 */
export type JounrnalEntryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which JounrnalEntries to delete
     */
    where?: Prisma.JounrnalEntryWhereInput;
    /**
     * Limit how many JounrnalEntries to delete.
     */
    limit?: number;
};
/**
 * JounrnalEntry without action
 */
export type JounrnalEntryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JounrnalEntry
     */
    select?: Prisma.JounrnalEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JounrnalEntry
     */
    omit?: Prisma.JounrnalEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JounrnalEntryInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=JounrnalEntry.d.ts.map