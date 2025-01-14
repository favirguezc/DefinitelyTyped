// Type definitions for nodegit 0.27
// Project: https://github.com/nodegit/nodegit, http://nodegit.org
// Definitions by: Dolan Miu <https://github.com/dolanmiu>,
//                 Tobias Nießen <https://github.com/tniessen>,
//                 Pierre Vigier <https://github.com/pvigier>
//                 Jibril Saffi <https://github.com/IGI-111>
//                 Benjamin Schuster-Boeckler <https://github.com/DaGaMs>
//                 Julien Chaumond <https://github.com/julien-c>
//                 Jake Murzy <https://github.com/jmurzy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export { AnnotatedCommit } from './annotated-commit';
export { Apply } from './apply';
export { ApplyOptions } from './apply-options';
export { Attr } from './attr';
export { BlameHunk } from './blame-hunk';
export { BlameOptions } from './blame-options';
export { Blame } from './blame';
export { Blob } from './blob';
export { Branch } from './branch';
export { Buf } from './buf';
export { CertHostkey } from './cert-host-key';
export { CertX509 } from './cert-x509';
export { Cert } from './cert';
export { CheckoutOptions } from './checkout-options';
export { Checkout } from './checkout';
export { CherrypickOptions } from './cherry-pick-options';
export { Cherrypick } from './cherry-pick';
export { CloneOptions } from './clone-options';
export { Clone } from './clone';
export { Commit } from './commit';
export { Config } from './config';
export { ConvenientHunk } from './convenient-hunk';
export { ConvenientPatch } from './convenient-patch';
export { CredUserpassPayload } from './cred-user-pass-payload';
export { CredUsername } from './cred-username';
export { Cred } from './cred';
export { CvarMap } from './cvar-map';
export { DescribeFormatOptions } from './describe-format-options';
export { DescribeOptions } from './describe-options';
export { DiffBinaryFile } from './diff-binary-file';
export { DiffBinary } from './diff-binary';
export { DiffDelta } from './diff-delta';
export { DiffFile } from './diff-file';
export { DiffLine } from './diff-line';
export { DiffOptions } from './diff-options';
export { DiffPerfdata } from './diff-perf-data';
export { DiffStats } from './diff-stats';
export { Diff, DiffFindOptions } from './diff';
export { Enums } from './enums';
export { Error } from './error';
export { FetchOptions } from './fetch-options';
export { Fetch } from './fetch';
export { Filter } from './filter';
export { Giterr } from './git-err';
export { Graph } from './graph';
export { Hashsig } from './hash-sig';
export { Index } from './index_';
export { IndexEntry } from './index-entry';
export { Ignore } from './ignore';
export { Indexer } from './indexer';
export { Libgit2 } from './lib-git2';
export { MergeFileInput } from './merge-file-input';
export { MergeFileOptions } from './merge-file-options';
export { MergeFileResult } from './merge-file-result';
export { MergeOptions } from './merge-options';
export { Merge } from './merge';
export { Note } from './note';
export { Object } from './object';
export { OdbExpandId } from './odb-expand-id';
export { OdbObject } from './odb-object';
export { Odb } from './odb';
export { Oidarray } from './oid-array';
export { Oid } from './oid';
export { Openssl } from './open-ssl';
export { Packbuilder } from './pack-builder';
export { Pathspec } from './path-spec';
export { ProxyOptions } from './proxy-options';
export { Proxy } from './proxy';
export { PushOptions } from './push-options';
export { PushUpdate } from './push-update';
export { Push } from './push';
export { RebaseOperation } from './rebase-operation';
export { Rebase, RebaseOptions } from './rebase';
export { Refdb } from './ref-db';
export { Reflog, ReflogEntry } from './ref-log';
export { Refspec } from './ref-spec';
export { Reference } from './reference';
export { RemoteCallbacks } from './remote-callbacks';
export { Remote } from './remote';
export { Repository, RepositoryInitOptions } from './repository';
export { Reset } from './reset';
export { Revparse } from './rev-parse';
export { Revwalk } from './rev-walk';
export { Revert } from './revert';
export { Signature } from './signature';
export { Stash } from './stash';
export { StatusEntry } from './status-entry';
export { StatusFileOptions } from './status-file-options';
export { StatusFile } from './status-file';
export { StatusList } from './status-list';
export { StatusOptions } from './status-options';
export { Status } from './status';
export { Strarray } from './str-array';
export { SubmoduleUpdateOptions } from './submodule-update-options';
export { Submodule } from './submodule';
export { Tag } from './tag';
export { Time } from './time';
export { TransferProgress } from './transfer-progress';
export { Transport } from './transport';
export { Treebuilder } from './tree-builder';
export { TreeEntry } from './tree-entry';
export { TreeUpdate } from './tree-update';
export { Tree } from './tree';
export const version: string;
declare const _: typeof Promise;
export { _ as Promise };
